"use client";
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BasicPie from "./PieChart";
import Button from "@/app/Button";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

const Page = () => {
  const searchParams = useSearchParams();
  const correctedAnswers = searchParams.get("correct")
    ? +searchParams.get("correct")
    : "";
  const inCorrectedAnswers = searchParams.get("inCorrect")
    ? +searchParams.get("inCorrect")
    : "";
  const noSelectedAnswers = searchParams.get("noSelected")
    ? +searchParams.get("noSelected")
    : "";
  const userName = searchParams.get("userName") && searchParams.get("userName");
  return (
    <>
      {noSelectedAnswers === 15 ? (
        <div className="flex flex-col justify-center gap-4 ">
          <h1 className="text-center text-lg md:text-2xl mt-24">
            Please answer questions to see the result !
          </h1>
          <Link className="mx-auto" href="/questions/page-1">
            <Button>
              back to questions <KeyboardBackspaceOutlinedIcon />
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <h1 className="text-center text-lg md:text-2xl">
            <span className="text-lime-500">Well Done</span> {userName}
          </h1>
          <div className="w-full hidden p-4 md:flex justify-center">
            <BasicPie
              correctAnswers={correctedAnswers}
              inCorrectAnswers={inCorrectedAnswers}
              noSelectedAnswers={noSelectedAnswers}
              cx={100}
              cy={200}
            />
          </div>
          <div className="w-full md:hidden p-4  flex justify-center">
            <BasicPie
              correctAnswers={correctedAnswers}
              inCorrectAnswers={inCorrectedAnswers}
              noSelectedAnswers={noSelectedAnswers}
              cx={200}
              cy={150}
              radius={120}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Page;
