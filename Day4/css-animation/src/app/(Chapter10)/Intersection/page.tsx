"use client"
import { useEffect, useRef } from "react";

export default function IntersectionPage() {
    const ref = useRef<HTMLDivElement>(null);
    const newRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            console.log({ entries });
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                } else {
                    console.log("화면에서 사라짐");
                }
            });
        });

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        const currentNewRef = newRef.current;
        if (currentNewRef) {
            observer.observe(currentNewRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
            if (currentNewRef) {
                observer.unobserve(currentNewRef);
            }
        };
    }, []);
    return (
        <>
            <div className="flex h-[400dvh] items-center justify-center border-2 border-amber-300">
                <div ref={ref} className="h-48 w-48 bg-amber-300"></div>
            </div>
            <div className="flex h-[400dvh] items-center justify-center border-2 border-amber-300">
                <div ref={newRef} className="h-48 w-48 bg-blue-300"></div>
            </div>
        </>
    );
}