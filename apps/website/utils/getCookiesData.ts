"use server";
import { cookies } from "next/headers";

export async function getCookiesData() {
  const cookieStore = cookies();
  return cookieStore.get("userId")?.value;
}

export async function isLoggedIn() {
  const cookiesStore = cookies();
  return cookiesStore.get("loggedIn")?.value;
}
