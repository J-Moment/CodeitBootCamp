"use client";

import { useEffect, useState } from "react";

export default function Home() {
    const [fill, setFill] = useState("#000000");
    const [border, setBorder] = useState("#000000");

    const handleBorderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBorder(e.target.value);
        localStorage.setItem("borderColor", e.target.value);
    }

    const handleFillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFill(e.target.value);
        localStorage.setItem("fillColor", e.target.value);
    }

    // 컴포넌트가 처음 렌더링될 때 로컬 스토리지에서 색상 값을 불러옵니다.  
    useEffect(() => {
        if (localStorage.getItem("borderColor")) {
            setBorder(localStorage.getItem("borderColor")!);
        }
        if (localStorage.getItem("fillColor")) {
            setFill(localStorage.getItem("fillColor")!);
        }
    }, []);

    return (
        <div className="flex h-screen flex-col items-center justify-center gap-6">
            <h1 className="text-2xl font-bold">테마 설정</h1>
            <div className="flex items-center justify-center gap-6">
                <div className="flex h-18 w-48 items-center justify-center gap-2 rounded-md bg-gray-300">
                    <span>채우기</span>
                    <input
                        type="color"
                        name="fill"
                        id="fill"
                        value={fill}
                        onChange={(e) => handleFillChange(e)}
                    />
                </div>
                <div className="flex h-18 w-48 items-center justify-center gap-2 rounded-md bg-gray-300">
                    <span>테두리</span>
                    <input
                        type="color"
                        name="border"
                        id="border"
                        value={border}
                        onChange={(e) => handleBorderChange(e)}
                    />
                </div>
            </div>
            <div
                className={`h-24 w-48 rounded-md border-4`}
                style={{ backgroundColor: fill, borderColor: border }}
            ></div>
        </div>
    );
}