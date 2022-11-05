import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ height: 100, background: "#E0BFE6", justifyContent: "space-between" }}>
          <img height='90' src="logo.png" />
          <Box>

            <Link to='/login'><Button size="large" style={{ marginRight: "10px", background: "white", border: "solid", borderRadius: 10, color: "black" }}>로그인</Button></Link>
            <Link to='/Signup'><Button size="large" style={{ background: "white", border: "solid", borderRadius: 10, color: "black" }}>회원가입</Button></Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
