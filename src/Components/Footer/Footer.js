import { Typography, Stack, useTheme, useMediaQuery } from "@mui/material";
import { companyData } from "../../data";
import { CompanyInfo, NavLinks } from "../ReusableComponents";
import { footerData } from "./data";

function Footer() {
  const theme = useTheme();
  const isAtLeastSm = useMediaQuery(theme.breakpoints.up("sm"));

  const { attribution } = footerData;

  return (
    <Stack
      variant='section'
      sx={{
        gap: theme.spacing(8),
        backgroundColor: "primary.main",
        color: "#ACB4AF",
        // color: "#D3D7D5",
      }}
    >
      <Stack direction={{ xxs: "column", sm: "row" }} gap='inherit'>
        <Stack sx={{ gap: theme.spacing(8), flex: 1 }}>
          <Typography
            variant={"h5"}
            typography='primaryFont'
            textTransform='uppercase'
          >
            {companyData.name}
          </Typography>

          <Stack direction={{ xxs: "column", lg: "row" }} gap={6}>
            <Stack gap={1} width={1}>
              <CompanyInfo direction='row' type='contact' labelKey='abriev' />
            </Stack>
            <Stack gap={1} width={1}>
              <CompanyInfo
                type='hours'
                labelKey={isAtLeastSm ? "full" : "abriev"}
                direction='row'
              />
            </Stack>
          </Stack>
        </Stack>

        <Stack gap={theme.spacing(3)}>
          <NavLinks
            color='background.primary'
            textAlign={{ xxs: "center", md: "left" }}
            fontWeight={600}
          />
        </Stack>
      </Stack>
      <Stack alignItems='center' gap={2}>
        <Typography typography='footer.attribution' fontSize={12}>
          {attribution.copyright}
        </Typography>
        <Typography typography='footer.attribution' fontSize={10}>
          {attribution.images}
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Footer;
