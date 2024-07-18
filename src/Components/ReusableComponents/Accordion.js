import { useState } from "react";
import { Typography, Box } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

function Accordion({ panels, ...rest }) {
  const [expanded, setExpanded] = useState(0);

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(prev => (newExpanded ? panel : prev));
  };

  const borderColor = "lightgrey";
  //   const borderColor = "rgba(0, 0, 0, .125)";

  return (
    <Box width={1} {...rest}>
      {panels.map(({ title, p }, index) => {
        const isExpanded = expanded === index;

        return (
          <MuiAccordion
            disableGutters
            elevation={0}
            key={index}
            expanded={isExpanded}
            onChange={handleChange(index)}
            sx={{
              backgroundColor: "transparent",
              border: 0,
              //   borderBottom: isLastPanel && 1,
              // borderColor: borderColor,
              borderTop: 1,
              borderBottom: 1,
              borderColor: isExpanded ? borderColor : "transparent",
              transition: "border-color 0.3s ease-in-out",

              "& .MuiAccordionSummary-root:hover, .MuiButtonBase-root:hover": {
                cursor: isExpanded ? "text" : "pointer",
                transitionDelay: "0.25s", // Add a short delay to cursor change
              },
              "&::before": {
                display: "none",
              },
            }}
          >
            <MuiAccordionSummary
              expandIcon={
                <ArrowForwardIosSharpIcon
                  disabled
                  sx={{
                    fontSize: "0.9rem",
                    transform: "rotate(270deg)",
                    opacity: isExpanded ? 0.25 : 1,
                    transition:
                      "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
                  }}
                />
              }
              sx={{
                backgroundColor: "transparent",
                // borderTop: 1,
                // borderColor: isExpanded ? "inherit" : "transparent",
              }}
            >
              <Typography variant='h6' typography='p' fontWeight={400}>
                0{index + 1}. {title}
              </Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails sx={{ mx: 2, maxWidth: "md" }}>
              <Typography variant='p' typography='p'>
                {p}
              </Typography>
            </MuiAccordionDetails>
          </MuiAccordion>
        );
      })}
    </Box>
  );
}

export default Accordion;
