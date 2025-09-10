'use client';

import { getCookieValue } from "./lib/getCookieValue";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
    (window as any).getCookieValue = getCookieValue;
  }, []);
    return (
        <div>
        </div>
    );
}