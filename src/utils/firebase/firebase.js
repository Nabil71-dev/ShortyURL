import { initializeApp } from "firebase/app";

const app = initializeApp({
    apiKey: process.env.API_KEY,
    authDomain: process.env.auth_Domain,
    projectId: process.env.project_Id,
    storageBucket: process.env.storage_Bucket,
    messagingSenderId: process.env.messaging_Sender_Id,
    appId: process.env.app_Id
})
export default app;