import React from "react";
import AccordionUse from "./Accordion";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Development",
};
const Development = () => {
  return (
    <div className="flex flex-col gap-6 bg-sky-50 justify-center px-2 py-1">
      <h2 className="text-md md:text-3xl text-center">
        {" "}
        to develop your skills for an English{" "}
        <span className="text-lime-500 bold">quick</span> test, follow these
        steps to improve your performance
      </h2>
      <AccordionUse
        title="Improve Your Weak Areas"
        content={[
          "Use apps like Grammarly, Duolingo, Quizlet",
          "Study grammar books like English Grammar in Use (Raymond Murphy)",
          "Learn collocations & phrasal verbs (essential for advanced levels)",
        ]}
      />
      <AccordionUse
        title=" Take Mock Tests"
        content={[
          "Simulate real test conditions with a timer",
          "Review mistakes and understand why you got them wrong",
          ,
          "Try different test providers to get a variety of question types",
        ]}
      />
      <AccordionUse
        title="Build Confidence Before the Test"
        content={[
          "Stay consistent with practice",
          "Avoid last-minute cramming—revise key concepts instead",
          ,
          "Get enough sleep before the test day",
        ]}
      />
    </div>
  );
};

export default Development;
