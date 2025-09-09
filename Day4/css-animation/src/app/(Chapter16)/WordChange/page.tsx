"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";

export const WordChangeAnimation = ({
  prefix,
  suffix,
  words,
  interval = 2000,
}: {
  prefix: string;
  suffix: string;
  words: string[];
  interval?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // currentIndex를 현재 단어 개수로 나눈 나머지를 구함
      // 단어가 4개라면 0, 1, 2, 3, 0, 1, 2, 3, ...
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <div className="flex h-12 items-center overflow-hidden text-2xl">
      <span>{prefix}</span>
      <div className="relative mx-2 inline-block w-12 overflow-hidden">
        {/* popLayout: 사라질 때 그 단어가 차지하는 공간을 없애버리기 위함 */}
        <AnimatePresence mode="popLayout">
          <m.span
            // 키가 달라지면 새로운 애니메이션 생성
            key={currentIndex}
            // 처음에는 아래 50px 위치 및 안보이게
            initial={{ y: 50, opacity: 0 }}
            // 애니메이션 시작 시 원래 위치 차지 및 나타나기
            animate={{ y: 0, opacity: 1 }}
            // 애니메이션 종료 시 위로 50px 이동하면서 사라짐
            exit={{ y: -50, opacity: 0 }}
            // 애니메이션 지속 시간
            transition={{ duration: 0.5 }}
            className="inline-block font-bold text-blue-600"
          >
            {`${words[currentIndex]}`}
          </m.span>
        </AnimatePresence>
      </div>
      <span>{suffix}</span>
    </div>
  );
};

// 사용 예시
export default function WordChangeExample() {
  // 단어 목록
  const words = ["러닝", "게임", "볼링", "요가", "독서"];

  return (
    <div className="p-8">
      <WordChangeAnimation
        prefix="오늘은"
        suffix="어떤가요?"
        words={words}
        interval={2000}
      />
    </div>
  );
}