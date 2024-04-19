import { NextResponse } from "next/server";
import { prisma } from "../../../../utils/prisma";
import { DefaultConfig } from "../../../../components/worldpresetconfigmodel";

export async function GET(request: Request) {
    const paths = new URL(request.url).pathname.split("/");
    var model = new DefaultConfig(paths[3]);
    var error: any;
    var data;
    if (model.clientId != "") {
        try {
            data = await prisma.post.findFirst({
                where: {
                    clientId: paths[3]
                }
            });
        }
        catch (e) {
            error = e;
        }
    };

    return NextResponse.json({data}, { status: 200 });
};
