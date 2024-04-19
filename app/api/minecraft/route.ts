import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { McResponce } from "../../contexts/minecraft-context";

export async function GET(request: NextApiRequest) {
    var url = request.url;
    var code: number = 0;

    if (url) {
        code = Number.parseInt(new URL(url).searchParams.get("code") ?? "0");
    }

    var status = 400;
    var json: McResponce | undefined;

    if (code != null) {
        try {
            const api = (await fetch(`http://localhost:8000/auth/?code=${code}`));

            var res = await api.text();
            var status = api.status;

            json = JSON.parse(res) as McResponce;
            status = json.ok ? 200 : 400;
        }
        catch {
            code = 100;
        }
    }

    return NextResponse.json({ res: status == 200 ? json : {} }, { status: status });
};
