import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
const SearchExercises = () => {
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        color="#000"
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px", mb: "70px", textAlign: "center" },
        }}
      >
        Exercises Worth Every Rep
      </Typography>
      <Box position="relative" mb="72px" padding="20px">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "4px",
            },
            width:{lg:'800px', xs:'350px'},
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          height="76px"
          value=""
          onchange={(e) => {}}
          placeholder="Search an Exercise"
          type="text"
        />
        <Button className="search-btn"
        sx={{
          bgcolor:'#FF2625',
          color:'#fff',
          textTransform: 'none',
          width:{lg:'170px', xs:'80px'},
          fontSize: { lg: '20px', xs: '14px'},
          height:'56px',
          position:'absolute',
          right: '0'
        }}>
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
