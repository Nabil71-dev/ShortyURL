/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // # Server URL
        SERVER_URL: 'http://127.0.0.1:8080/',
        // # https://url-shortner-nabil-be.vercel.app

        // # Firebase credentials
        TOKEN_SECRET_KEY: 'shortyUrlSecretToken',
        API_KEY: 'AIzaSyDIMeEXLkCgWAOPiwlXZ2r44k9ueXHbXTs',
        auth_Domain: 'shorty-url-imp.firebaseapp.com',
        project_Id: 'shorty-url-imp',
        storage_Bucket: 'shorty-url-imp.appspot.com',
        messaging_Sender_Id: '459818517169',
        app_Id: '1:459818517169:web:4e7372a73cd0ef2de05890',
    },
}

module.exports = nextConfig
