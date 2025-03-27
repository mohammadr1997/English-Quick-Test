"use client";
"use client";
import React from "react";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import Link from "next/link";
import Button from "@/app/Button";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useSearchParams } from "next/navigation";
import { thirdQuestions } from "@/app/Data/data";
const Page = () => {
  const searchParams = useSearchParams();
  const correct = +searchParams.get("correct");
  const inCorrect = +searchParams.get("inCorrect");
  const noSelected = +searchParams.get("noSelected");
  const [correctCount, setCorrectCount] = useState(correct);
  const [inCorrectCount, setIncorrectCount] = useState(inCorrect);
  const [noSelectedCount, setNoSelectedCount] = useState(noSelected);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const handleChange = (event, correctAnswer, id) => {
    const selectedAnswer = event.target.value;
    if (selectedAnswers[id]) return;
    setSelectedAnswers((prev) => {
      return [...prev, selectedAnswer];
    });
    if (selectedAnswer == correctAnswer) {
      setCorrectCount((prevCount) => prevCount + 1);
      setNoSelectedCount((prev) => prev - 1);
    } else if (selectedAnswer !== correctAnswer && selectedAnswer !== "") {
      setIncorrectCount((prevCount) => prevCount + 1);
      setNoSelectedCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <div className=" p-2 w-full flex justify-center">
        <FormControl>
          {thirdQuestions.map((question, index) => {
            return (
              <section className="m-2" key={index}>
                <FormLabel
                  key={question.index}
                  sx={{
                    "@media all and (max-width:540px)": {
                      fontSize: "1rem",
                    },
                    "@media all and (min-width:540.999px)": {
                      fontSize: "1.4rem",
                    },
                    color: "black",
                    "&.Mui-focused": {
                      color: "black",
                    },
                  }}
                  id="demo-radio-buttons-group-label"
                >
                  {question.question}
                </FormLabel>
                <RadioGroup
                  onChange={(event) =>
                    handleChange(event, question.correct, index)
                  }
                  aria-labelledby="demo-radio-buttons-group-label"
                  value={selectedAnswers[index] || ""}
                  name="radio-buttons-group"
                  disabled={selectedAnswers[index]}
                >
                  <FormControlLabel
                    value={question.opt1}
                    control={<Radio />}
                    label={question.opt1}
                    sx={{
                      "&.Mui-checked": { color: "black" },
                    }}
                  />
                  <FormControlLabel
                    value={question.opt2}
                    control={<Radio />}
                    label={question.opt2}
                    sx={{
                      "&.Mui-checked": { color: "black" },
                    }}
                  />
                  {question.opt3 && (
                    <FormControlLabel
                      value={question.opt3}
                      control={<Radio />}
                      label={question.opt3}
                      sx={{
                        "&.Mui-checked": { color: "black" },
                      }}
                    />
                  )}
                </RadioGroup>
                <hr />
              </section>
            );
          })}
        </FormControl>
      </div>
      <div className="w-full hidden md:flex md:flex-row justify-between mt-4  md:px-5">
        <Link href="/questions/page-2">
          <Button>
            Previous Page <KeyboardBackspaceOutlinedIcon />
          </Button>
        </Link>
        <Link
          href={`/questions/result?correct=${correctCount}&inCorrect=${inCorrectCount}&noSelected=${noSelectedCount}`}
        >
          <Button>
            Next Page <EastOutlinedIcon />
          </Button>
        </Link>
      </div>
      <div className="w-full  flex flex-col  justify-center md:hidden   md:px-5">
        <Link
          className="mx-auto mt-2 mb-2"
          href={`/questions/result?correct=${correctCount}&inCorrect=${inCorrectCount}&noSelected=${noSelectedCount}`}
        >
          <Button>
            Next Page <EastOutlinedIcon />
          </Button>
        </Link>
        <Link className="mx-auto mt-2 mb-2" href="/questions/page-2">
          <Button>
            Previous Page <KeyboardBackspaceOutlinedIcon />
          </Button>
        </Link>
      </div>
    </>
  );
};

export default Page;
