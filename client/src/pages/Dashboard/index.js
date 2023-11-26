import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@mui/system";

import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      ></AppBar>

      <Sidebar />

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        style={{ display: "flex" }}
      >
        {/* <Toolbar /> */}
        {/* <Typography> */}
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#007FFF",
                dark: "#0066CC",
              },
            },
          }}
        >
          <Box
            m={4}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          />
        </ThemeProvider>
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#007FFF",
                dark: "#0066CC",
              },
            },
          }}
        >
          <Box
            m={4}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          />
        </ThemeProvider>
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#007FFF",
                dark: "#0066CC",
              },
            },
          }}
        >
          <Box
            m={4}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          />
        </ThemeProvider>
        <ThemeProvider
          theme={{
            palette: {
              primary: {
                main: "#007FFF",
                dark: "#0066CC",
              },
            },
          }}
        >
          <Box
            m={4}
            sx={{
              width: 200,
              height: 200,
              borderRadius: 1,
              bgcolor: "primary.main",
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          />
        </ThemeProvider>
        {/* </Typography> */}
      </Box>
    </Box>
  );
};

export default Dashboard;
