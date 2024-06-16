'use server'
import { cookies } from "next/headers";

export async function createCookie(loggedIn: boolean, userId: string) {

  if (loggedIn) {
    cookies().set('loggedIn', 'true');
    cookies().set('userId', userId);
  }
  else {
    cookies().set('loggedIn', 'false');
    cookies().set('userId', userId);
  }
}