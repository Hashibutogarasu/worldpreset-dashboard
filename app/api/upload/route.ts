import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { McResponce } from "../../contexts/minecraft-context";

type UploadRequestType = {
    mc: McResponce,
    user: {
        name?: string | null
        email?: string | null
        image?: string | null
    }
}

export async function POST(request: Request) {
    var status = 400;
    var res = {
        message: ""
    };
    if (request.body) {
        try {
            var json = JSON.stringify(await request.json());
            const api = (await fetch(`http://localhost:8000/save`, {
                method: 'POST',
                body: json,
            }));
            res.message = JSON.parse(await api.text()).message;
            status = api.status;
        }
        catch {

        }
    }

    return NextResponse.json({ res: res }, { status: status });
};
