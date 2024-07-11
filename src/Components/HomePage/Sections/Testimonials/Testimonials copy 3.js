import {
  Paper,
  Typography,
  Box,
  Container,
  useMediaQuery,
} from "@mui/material";
import CarouselButtons from "../../../../HelperComponents/CarouselButtons.js";
import { useSectionSx } from "../../../../Styles/useSectionSx";
import useCarousel from "../../../../Hooks/useCarousel";
import { md } from "../../../../Theme/mediaQueries.js";
import { testimonialData } from "./data.js";

function Testimonials() {
  const { subtitle, title, description, backgroundImage, reviews } =
    testimonialData;

  const [
    currentIndex,
    setCurrentIndex,
    handlePrevSlide,
    handleNextSlide,
    Carousel,
  ] = useCarousel(reviews);

  const largeScreen = useMediaQuery(md);

  const { variant, sx } = useSectionSx();

  const quoteIcon = <i class='fa-solid fa-quote-right'></i>;

  return (
    <Paper variant='section'>
      <Container maxWidth={false} sx={sx.section_container}>
        <Box
          className='flexRow'
          sx={{
            justifyContent: "space-between",
            width: 1,
            gap: 2,
          }}
        >
          <Typography variant={variant.subtitle} sx={sx.subtitle}>
            {subtitle}
          </Typography>

          <CarouselButtons
            handlePrevSlide={handlePrevSlide}
            handleNextSlide={handleNextSlide}
            gap={1.5}
          />
        </Box>
        <Typography variant={variant.title} sx={sx.title}>
          {title}
        </Typography>
        {largeScreen && (
          <Typography variant={variant.heading_p} sx={sx.heading_p}>
            {description}
          </Typography>
        )}
        <Container maxWidth={false}>
          <Box
            className='flexColumn'
            sx={{ width: 1, mt: 3, maxWidth: largeScreen ? "sm" : 1 }}
          >
            <Carousel currentIndex={currentIndex} content={reviews}>
              {params => (
                <Box className='flexColumn' gap={2} alignItems='flex-start'>
                  <Typography variant='h4' color='primary.main'>
                    {quoteIcon}
                  </Typography>
                  <Typography
                    variant={variant.content_title}
                    sx={sx.content_title}
                  >
                    {params.name}
                  </Typography>
                  <Typography
                    variant={variant.content_p}
                    sx={{ ...sx.content_p, fontStyle: "italic" }}
                  >
                    {params.review}
                  </Typography>
                </Box>
              )}
            </Carousel>
          </Box>
        </Container>
      </Container>
    </Paper>
  );
}

export default Testimonials;
