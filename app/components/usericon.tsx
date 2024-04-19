import { useSession } from "next-auth/react";
import Image from "next/image";

export default function UserIcon() {
    const { data: session } = useSession()
    return <Image
        className="h-8 w-8 rounded-full"
        src={session?.user?.image ?? ""}
        height={32}
        width={32}
        alt={`${session?.user?.image ?? ""} avatar`}
    />
}