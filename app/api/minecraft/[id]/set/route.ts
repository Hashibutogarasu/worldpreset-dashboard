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
            await prisma.post.create({
                data: model.getDefault()
            });
            
        }
        catch (e) {
            error = e;
        }
    };

    return NextResponse.json({
        res: {
            error: error,
            message: error.message
        } ?? data
    }, { status: 200 });
};
