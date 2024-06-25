import { useSectionSx } from "../../../../Styles/useSectionSx";
import { Box, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function ServiceItem({ service }) {
  const { variant, sx } = useSectionSx();
  return (
    <Box sx={{ ...sx.contentContainer, maxWidth: "mobile" }}>
      <Typography
        className='flexRow'
        justifyContent='flex-start'
        gap={1}
        variant={variant.content_title}
        sx={sx.content_title}
      >
        <ArrowRightAltIcon color='#20201F' /> {service.title}
      </Typography>

      <Typography variant={variant.content_p} sx={sx.content_p}>
        {service.description}
      </Typography>
    </Box>
  );
}

export default ServiceItem;
