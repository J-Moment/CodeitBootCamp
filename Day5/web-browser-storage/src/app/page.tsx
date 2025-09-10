'use client';
import { setCookie } from "./cookie/CookieFunction";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    setCookie("user", "kim", {
      path: "/",
      secure: true,
      "max-age": 3600
    });
  }, []);
  return (
    <div>
    </div>
  );
}