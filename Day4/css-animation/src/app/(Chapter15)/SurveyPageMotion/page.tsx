"use client";

import { useState } from "react";
import StartPage from "./components/StartPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";

const questions = [
  {
    question: "사람들과 함께 있을 때 에너지가 충전되나요?",
    options: ["매우 그렇다", "약간 그렇다", "약간 아니다", "전혀 아니다"],
  },
  {
    question: "새로운 아이디어를 생각하는 것을 좋아하시나요?",
    options: ["매우 그렇다", "약간 그렇다", "약간 아니다", "전혀 아니다"],
  },
  {
    question: "계획을 세우는 것을 선호하시나요?",
    options: ["매우 그렇다", "약간 그렇다", "약간 아니다", "전혀 아니다"],
  },
];

export default function MBTITest() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => {
    setCurrentStep(1);
  };

  const handleAnswer = (answer: string) => {
    setAnswers([...answers, answer]);
    if (answers.length + 1 === questions.length) {
      setCurrentStep(2);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      {currentStep === 0 && <StartPage onStart={handleStart} />}
      {currentStep === 1 && (
        <QuestionPage
          key={answers.length}
          question={questions[answers.length]}
          onAnswer={handleAnswer}
        />
      )}
      {currentStep === 2 && <ResultPage answers={answers} />}
    </div>
  );
}
