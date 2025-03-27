"use client";
import React from "react";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const correctedAnswers = searchParams.get("correct");
  const inCorrectedAnswers = searchParams.get("inCorrect");
  const noSelectedAnswers = searchParams.get("noSelected");
  return (
    <div className="bg-lime-300">
      result
      <h1>correct answers = {correctedAnswers}</h1>
      <h1>Incorrect answers = {inCorrectedAnswers}</h1>
      <h1>noSelected answers = {noSelectedAnswers}</h1>
    </div>
  );
};

export default Page;
