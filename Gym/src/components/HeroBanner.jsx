import React from "react";
import { Box, Stack, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

function HeroBanner() {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
        position: "relative",
        p: "20px",
      }}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        color="#000"
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Push.
        <br /> Persevere.
        <br /> Prosper.
      </Typography>
      <Typography color="#000" fontSize="22px" lineheight="35px" mb={4}>
        Unlock Your Potential with Proven Exercises.
      </Typography>
      <Button variant="contained" color="error" href="#exercises"
      sx={{backgroundColor:'#ff2625',
      padding: '10px'}}>
        Start Grinding
      </Button>
      <Typography
        fontSize="200px"
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
      >
       Exercise
      </Typography>
      <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
}

export default HeroBanner;
