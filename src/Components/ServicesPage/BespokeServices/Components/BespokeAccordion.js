import { useState } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import { Typography, Box } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { useSectionSx } from "../../../../Styles/useSectionSx";
import { fonts } from "../../../../Theme/ThemeContext";

export default function BespokeAccordion({ panels, ...rest }) {
  const [expanded, setExpanded] = useState(0);

  const { variant, sx } = useSectionSx();

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(prev => (newExpanded ? panel : prev));
  };

  const borderColor = "lightgrey";
  //   const borderColor = "rgba(0, 0, 0, .125)";

  return (
    <Box {...rest} sx={{ width: 1 }}>
      {panels.map(({ title, description }, index) => {
        const isExpanded = expanded === index;
        const isLastPanel = index === panels.length - 1;
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
              borderBottom: isLastPanel && 1,
              borderColor: borderColor,
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
                    transition: "all 0.3s ease-in-out",
                  }}
                />
              }
              sx={{
                backgroundColor: "transparent",
                borderTop: 1,
                borderColor: "inherit",
              }}
            >
              <Typography
                variant={variant.content_title}
                sx={{
                  ...sx.content_title,
                  flex: 1,
                  "& .indexNumber": {
                    fontSize: { xxs: 16 },
                    fontWeight: 600,
                    fontFamily: fonts.secondary,
                  },
                }}
              >
                <span className='indexNumber'>0{index + 1}.</span> {title}
              </Typography>
            </MuiAccordionSummary>
            <MuiAccordionDetails sx={{ marginLeft: 2 }}>
              <Typography varinat={variant.content_p} sx={sx.content_p}>
                {description}
              </Typography>
            </MuiAccordionDetails>
          </MuiAccordion>
        );
      })}
    </Box>
  );
}
