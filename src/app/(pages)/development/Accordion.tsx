import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type accordionType = {
  title: string;
  content: string[];
};

export default function AccordionUse({ title, content }: accordionType) {
  return (
    <div>
      <Accordion
        sx={{
          textAlign: "center",
          width: "100%",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography
            sx={{
              textAlign: "center",
              margin: "0 auto",
              "@media(max-width:540px)": { fontSize: "17px" },
              "@media (min-width:540.999px)": { fontSize: "24px " },
            }}
            component="div"
          >
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="bg-sky-50 text-center text-sm md:text-2xl px-2 ">
          <ul>
            {content.map((text, index) => {
              return (
                <li className="list-item" key={index}>
                  {text}
                </li>
              );
            })}
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
