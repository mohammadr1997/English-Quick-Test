import * as React from "react";
import { PieArcLabel, PieChart } from "@mui/x-charts/PieChart";
type propTypes = {
  correctAnswers: number | string;
  inCorrectAnswers: number | string;
  noSelectedAnswers: number | string;
  cx: number;
  cy: number;
  radius?: number;
};
export default function BasicPie({
  correctAnswers,
  inCorrectAnswers,
  noSelectedAnswers,
  cx,
  cy,
  radius = 180,
}: propTypes) {
  return (
    <>
      <PieChart
        className=" mx-auto hidden   justify-center items-center align-middle"
        series={[
          {
            arcLabel: (item) => {
              return `${((item.value / 15) * 100).toFixed(0)}%`; // Calculating percentage and returning it as a string
            },
            data: [
              {
                id: 0,
                value: +correctAnswers,
                color: "lightgreen",
                label: "Correct",
              },
              {
                id: 1,
                value: +inCorrectAnswers,
                color: "#FF6961",
                label: "Incorrect",
              },
              {
                id: 2,
                value: +noSelectedAnswers,
                color: "lightblue",
                label: "Not Selected",
              },
            ],

            innerRadius: 50, // Adds space inside the chart
            outerRadius: radius, // Adjust size as needed
            paddingAngle: 5, // Adds spacing between slices
            cornerRadius: 5, // Smooth edges
            startAngle: 0,
            endAngle: 360,
            cx: cx, // Center X position
            cy: cy,
            labelPosition: "inside",
            labelFontSize: 14, // Ensures labels are readable
            labelColor: "#fff", // White text for better contrast
          },
        ]}
        width={500}
        height={400}
      />
    </>
  );
}
