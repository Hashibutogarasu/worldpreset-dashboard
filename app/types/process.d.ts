declare namespace NodeJS {
    export interface ProcessEnv {
        GOOGLE_CLIENT_KEY: string;
        GOOGLE_CLIENT_SECRET: string;
        FIREBASE_API_KEY: string;
        FIREBASE_AUTH_DOMAIN: string;
        FIREBASE_DATADASE_URL: string;
        FIREBASE_PROJECT_ID: string;
        FIREBASE_STORAGE_BUCKET: string;
        FIREBASE_MEASUREMENT_ID: string;
        FIREBASE_APP_ID: string;
        FIREBASE_MEASUREMENT_ID: string;
        DATABASE_URL: string
        DIRECT_URL: string;
    }
}