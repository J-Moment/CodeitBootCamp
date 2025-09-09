"use client";
import { useEffect, useRef, useState } from "react";

function FadeInSection({
    children,
    threshold = 0.1,
}: {
    children: React.ReactNode;
    threshold?: number;
}) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 요소가 화면에 들어오면 isVisible을 true로 설정
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // 한 번만 애니메이션 적용하기 위해 관찰 중단
                    observer.unobserve(entry.target);
                }
            },
            { threshold },
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        // 컴포넌트 언마운트 시 정리
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-in-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
        >
            {children}
        </div>
    );
}

export default function Home() {
    return (
        <main className="min-h-screen p-8">
            <h1 className="mb-6 text-3xl font-bold">인터섹션 옵저버 예시</h1>
            {/* 일반 콘텐츠 */}
            <div className="mb-96">
                <p className="mb-4">아래로 스크롤해보세요!</p>
            </div>
            {/* 페이드인 애니메이션 적용된 섹션들 */}
            <FadeInSection>
                <div className="mb-8 rounded-lg bg-blue-100 p-6">
                    <h2 className="mb-2 text-xl font-bold">첫 번째 섹션</h2>
                    <p>이 섹션은 화면에 들어올 때 페이드인 됩니다.</p>
                </div>
            </FadeInSection>
            <div className="h-96"></div> {/* 스크롤 공간 생성 */}
            <FadeInSection threshold={0.2}>
                <div className="mb-8 rounded-lg bg-green-100 p-6">
                    <h2 className="mb-2 text-xl font-bold">두 번째 섹션</h2>
                    <p>이 섹션은 20% 이상 보일 때 페이드인 됩니다.</p>
                </div>
            </FadeInSection>
            <div className="h-96"></div> {/* 스크롤 공간 생성 */}
            <FadeInSection threshold={0.5}>
                <div className="mb-8 rounded-lg bg-purple-100 p-6">
                    <h2 className="mb-2 text-xl font-bold">세 번째 섹션</h2>
                    <p>이 섹션은 50% 이상 보일 때 페이드인 됩니다.</p>
                </div>
            </FadeInSection>
        </main>
    );
}