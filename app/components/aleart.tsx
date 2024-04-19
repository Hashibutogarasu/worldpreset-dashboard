import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { Alert } from "@mui/material";

export default function InfoAleart({ ok }: { ok: boolean }) {
    return ok ? <Alert icon={<ExclamationCircleIcon fontSize="inherit" />} severity="success">
        認証に成功しました
    </Alert> : <Alert icon={<CheckIcon fontSize="inherit" />} severity="error">
        認証に失敗しました
    </Alert>
}