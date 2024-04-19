import { createContext } from "react";

export type McResponce = {
    status: number | undefined;
    authcode: number;
    clientId: string | undefined;
    ok: boolean;
}

export const McContext = createContext<McResponce | undefined>(
    {
        status: undefined,
        authcode: 400,
        clientId: undefined,
        ok: false
    }
);