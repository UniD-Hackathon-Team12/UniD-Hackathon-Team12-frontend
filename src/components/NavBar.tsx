import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { setLoginInfo, useLogin } from "../useLogin";

function NavBar() {
  const { data } = useLogin();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            height: 100,
            background: "#E0BFE6",
            justifyContent: "space-between",
          }}
        >
          <Link to="/">
            <img style={{ width: "35vw" }} src="/logo2.png" />
          </Link>
          {data?.login ? (
            <Box>
              <Link to="/mypage">
                <Button
                  size="large"
                  style={{
                    marginRight: "10px",
                    background: "white",
                    border: "solid",
                    borderRadius: 10,
                    color: "black",
                  }}
                >
                  마이 페이지
                </Button>
              </Link>
              <Link to="/">
                <Button
                  size="large"
                  style={{
                    background: "white",
                    border: "solid",
                    borderRadius: 10,
                    color: "black",
                  }}
                  onClick={() => setLoginInfo()}
                >
                  로그아웃
                </Button>
              </Link>
            </Box>
          ) : (
            <Box>
              <Link to="/login">
                <Button
                  size="large"
                  style={{
                    marginRight: "10px",
                    background: "white",
                    border: "solid",
                    borderRadius: 10,
                    color: "black",
                  }}
                >
                  로그인
                </Button>
              </Link>
              <Link to="/Signup">
                <Button
                  size="large"
                  style={{
                    background: "white",
                    border: "solid",
                    borderRadius: 10,
                    color: "black",
                  }}
                >
                  회원가입
                </Button>
              </Link>
            </Box>
          )}

          {/* 
            <Link to="/mypage">
              <Button
                size="large"
                style={{
                  marginRight: "10px",
                  background: "white",
                  border: "solid",
                  borderRadius: 10,
                  color: "black",
                }}
              >
                마이 페이지
              </Button>
            </Link>
            <Button
              size="large"
              style={{
                background: "white",
                border: "solid",
                borderRadius: 10,
                color: "black",
              }}
            >
              로그아웃
            </Button> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
