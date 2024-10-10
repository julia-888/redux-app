import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Table from "./Table";
import Nav from "./Nav";

const FirstPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "40px 200px",
      }}
    >
      <Typography sx={{ fontWeight: "400" }} variant="h4">
        Товары
      </Typography>
      <Table />
      <Nav />
    </Box>
  );
};

export default FirstPage;
