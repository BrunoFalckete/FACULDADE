"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { publicRoutes } from "@/app/router";

export default function ProtectedRoute({ children }: any) {
  const router = useRouter();

  useEffect(() => {
    const currentUser = Cookies.get("currentUser");
    
    const isPublicRoute = publicRoutes.includes(router.pathname)

    if (!currentUser && !isPublicRoute) {
      router.push("/auth/login");
    }
  }, [router])

  return (
    <>
      {children}
    </>
  )
}