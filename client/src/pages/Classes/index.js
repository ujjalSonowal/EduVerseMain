import React, { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Sidebar from "../../components/Sidebar";
import ClassList from "../../components/ClassList";
import Button from "@mui/material/Button";

const Classes = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      ></AppBar>{" "}
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography m={2}>
          <section style={{ marginTop: "-100px" }}>
            <h1
              style={{
                marginLeft: "40px",
                marginTop: "20px",
                fontSize: "30px",
                paddingBottom: "70px",
              }}
            >
              {" "}
              Classes{" "}
            </h1>{" "}
            <div style={{ textAlign: "right", paddingBottom: "40px" }}>
              <input
                style={{
                  padding: "5px",
                  borderRadius: "20px",
                  height: "35px",
                  width: "20%",
                }}
                type="text"
                placeholder="search.."
              />
              <Button
                style={{
                  marginLeft: "4px",
                  borderRadius: "10px",
                  height: "35px",
                }}
                variant="contained"
              >
                Search{" "}
              </Button>{" "}
            </div>{" "}
            <ClassList />
          </section>{" "}
        </Typography>{" "}
      </Box>{" "}
    </Box>
  );
};

export default Classes;
