import { Typography, Stack, useTheme, Rating } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { testimonialData } from "./data.js";

function Testimonials() {
  const theme = useTheme();
  const { quoteIcon, title, p, reviews } = testimonialData;

  return (
    <>
      <Stack gap={theme.spacing(12)} alignItems='center'>
        <Typography variant='h4' color='secondary.main'>
          {quoteIcon}
        </Typography>
        <Stack gap={theme.spacing(6)}>
          <Typography variant='h2' typography='title' textAlign='center'>
            {title}
          </Typography>
          <Typography
            variant='p'
            typography='p'
            sx={{ textAlign: { xxs: "left", sm: "center" }, maxWidth: "md" }}
          >
            {p}
          </Typography>
        </Stack>

        <Grid
          container
          columns={{ xxs: 1, md: 2 }}
          spacing={{
            xxs: theme.spacing(6),
            md: theme.spacing(8),
            lg: theme.spacing(12),
          }}
        >
          {reviews.map((review, index) => (
            <Grid xxs={1} key={index}>
              <Stack
                sx={{
                  maxWidth: { xxs: "sm", md: "mobile" },
                  margin: "auto",
                  gap: 4,
                }}
              >
                <Rating name='read-only' value={5} readOnly />
                <Typography variant='p' typography='p' fontStyle='italic'>
                  {review.review}
                </Typography>
                <Stack direction='row' gap={"10px"}>
                  <Typography variant={"p"} typography='p'>
                    - {review.name},
                  </Typography>
                  <Typography variant={"p"} typography='p'>
                    {review.location}
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </>
  );
}

export default Testimonials;
