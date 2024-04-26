import { Dispatch, createContext, useContext, useMemo, useState } from "react";

export type FlagContextType = {
    isloading: boolean;
    setloading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const LoadingContext = createContext<FlagContextType>({
    isloading: false,
    setloading: () => { },
});

export function useLoading() {
    return useContext(LoadingContext);
}

export function LoadingProvider({ children }: { children: React.ReactNode }) {
    const [loading, setloading] = useState(true);

    return <LoadingContext.Provider value={{
        isloading: loading,
        setloading: setloading,
    }}>
        {children}
    </LoadingContext.Provider>
}