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

  const showImage = useMediaQuery(md);

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
          {!showImage && (
            <CarouselButtons
              handlePrevSlide={handlePrevSlide}
              handleNextSlide={handleNextSlide}
            />
          )}
        </Box>
        <Typography
          variant={variant.title}
          sx={{
            ...sx.title,
            ...(!showImage && { margin: "1rem 0" }),
          }}
        >
          {title}
        </Typography>
        {showImage && (
          <Typography variant={variant.heading_p} sx={sx.heading_p}>
            {description}
          </Typography>
        )}
        <Box sx={sx.contentGrid}>
          <Box
            sx={sx.contentImage}
            component={"img"}
            src={backgroundImage}
            alt={"Testimonials section background image."}
          />

          <Box className='flexColumn' sx={{ width: 1, height: 1, gap: 3 }}>
            {showImage && (
              <CarouselButtons
                handlePrevSlide={handlePrevSlide}
                handleNextSlide={handleNextSlide}
              />
            )}

            <Box
              sx={{
                ...sx.contentContainer,
                ...(!showImage && { maxWidth: "sm" }),
              }}
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
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}

export default Testimonials;
