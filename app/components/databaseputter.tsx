import { Session } from "next-auth";
import { McResponce } from "../contexts/minecraft-context";

export default function DatabasePutter({ mc, session }: { mc: McResponce, session: Session }) {
    (fetch(`/api/firebase/put`, {
        method: 'POST',
        body: "",
    }));

    return <></>;
}