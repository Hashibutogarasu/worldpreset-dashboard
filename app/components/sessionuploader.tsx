import { useSession } from "next-auth/react";
import { McResponce } from "../contexts/minecraft-context";
import { useState } from "react";
import { Session } from "next-auth";
import { Alert } from "@mui/material";

export default function SessionUploader({ mc, session }: { mc: McResponce, session: Session }) {

    const [uploaded, setuploaded] = useState(false);
    const [message, setmessage] = useState("連携したクライアントにアップロードしています...");
    const [status, setstatus] = useState(200);

    if (mc.ok && !uploaded) {
        fetch(`/api/upload`, {
            method: 'POST',
            body: JSON.stringify({ user: session?.user, mc: mc }),
        }).then((res) => {
            if (res.status == 200) {
                setmessage("アップロードが完了しました");
            }
            else if(res.status == 201) {
                setmessage("アップロードに成功しました、が、データが不正です");
            }
            else if(res.status == 204){
                setmessage("データがありませぬ");
            }
            else if (res.status == 400) {
                setmessage("アップロードに失敗しました");
            }
            setstatus(res.status);
            setuploaded(true);
        });
    }

    return <Alert severity={status == 200 ? "success" : status == 201 ? "info" : status == 400 ? "error": "warning"}>
        {message}
    </Alert>;
}