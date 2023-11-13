import { NextResponse } from "next/server";
import { adminRoutes, userRoutes } from "@/utils/constant";

export function middleware(req) {
    const { pathname } = req.nextUrl
    const absUrl = new URL("/", req?.url);
    const currentUser = req.cookies.get("user")?.value;
    
    let parsedData = '';
    if (currentUser) {
        parsedData = JSON.parse(currentUser)?.data?.data
    }
    const { expiresIn, admin } = parsedData;

    if (expiresIn >= Date.now() && (adminRoutes.includes(pathname) || userRoutes.includes(pathname))) {
        if (admin==='true' && userRoutes.includes(pathname)) {
            const response = NextResponse?.redirect(absUrl);
            return response;
        }
        else if (admin==='false' && adminRoutes.includes(pathname)) {
            const response = NextResponse?.redirect(absUrl);
            return response;
        }
    }
    else if (expiresIn < Date.now() && (adminRoutes.includes(pathname) || userRoutes.includes(pathname))){
        req.cookies.remove("user")
        const response = NextResponse?.redirect(absUrl);
        response.cookies.remove("user")
        return response;
    }
    else if(currentUser===undefined && (adminRoutes.includes(pathname) || userRoutes.includes(pathname))){
        const response = NextResponse?.redirect(absUrl);
        return response;
    }
}