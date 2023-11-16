/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // # Server URL
        SERVER_URL: process.env.SERVER_URL,

        // # Firebase credentials
        TOKEN_SECRET_KEY: process.env.TOKEN_SECRET_KEY,
        API_KEY: process.env.API_KEY,
        auth_Domain: process.env.auth_Domain,
        project_Id: process.env.project_Id,
        storage_Bucket: process.env.storage_Bucket,
        messaging_Sender_Id: process.env.messaging_Sender_Id,
        app_Id: process.env.app_Id,
    },
    async rewrites() {
        return {
          fallback: [
           {
             source: '/:catchAll(.*)',
                destination: 'https://shorty-urli.vercel.app/admin/client-list/:catchAll(.*)', 
           },
         ],
        }
    },
}

module.exports =  nextConfig
