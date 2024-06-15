import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from 'axios'

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    try {
        // const data = await axios.post('')
        // const path = request.nextUrl.pathname
        // const publicPath = path === '/authPage/signin' || path === '/authPage/signup' || path === '/authPage/verify'

        // if (publicPath){
        //     return NextResponse.redirect(new URL('/', request.url))
        // }

        // if (!publicPath) {
        //     return NextResponse.redirect(new URL('/authPage/signin', request.url))
        // }
    } catch (error) {
        console.log(error);
    }
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/authPage/signin',
        '/authPage/signup',
        '/authPage/verify',
    ],
}