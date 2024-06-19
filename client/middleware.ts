'use server'
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    const cookiesStore = cookies();
    const userId = cookiesStore.get ("userId")?.value
    const isLoggedIn = cookiesStore.get("loggedIn")?.value
    
    const publicPath = path === '/authPage/signin' || path === '/authPage/signup';
    const homePath = path === `/home/${userId}`;
    const rootDir = path === '/';


    // console.log (userId);
    if ((publicPath && isLoggedIn === 'true') || (!homePath && rootDir && isLoggedIn === 'true')){
        return NextResponse.redirect(new URL(`/home/${userId}`, request.url))
    }
    if ( !publicPath && isLoggedIn === 'false'){
        return NextResponse.redirect(new URL('/authPage/signin', request.url))
    }
}

export const config = {
    matcher: [
        '/',
        '/home/:path*',
        '/authPage/signin',
        '/authPage/signup',
        '/authPage/verify',
    ],
}