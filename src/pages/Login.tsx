import React from "react";
import {
  Button,
  TextField,
  Stack,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signinAPI } from "../api";
import { setLoginInfo, useLogin } from "../useLogin";

function Login() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={handleSubmit(async (t) => {
        const { id, pw } = t;
        const ID = id.trim();
        const PW = pw.trim();
        if (ID.length === 0 || PW.length === 0) {
          alert("아이디 또는 비밀번호가 입력되지 않았습니다.");
          return;
        }
        const res = await signinAPI(ID, PW);
        if (res === null) {
          alert("아이디 또는 비밀번호가 일치하지 않습니다.");
          return;
        }
        setLoginInfo({ ...res, nickname: ID });
        navigate("/");
      })}
    >
      <Container fixed maxWidth="lg" sx={{ marginTop: "100px" }}>
        <Grid container alignItems="center" spacing={5}>
          <Grid item xs={4} container direction="row" justifyContent="flex-end">
            <Typography>아이디</Typography>
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="row"
            justifyContent="flex-start"
          >
            <TextField
              {...register("id")}
              sx={{ width: "60%" }}
              variant="outlined"
            />
          </Grid>

          <Grid item xs={4} container direction="row" justifyContent="flex-end">
            <Typography>비밀번호</Typography>
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="row"
            justifyContent="flex-start"
          >
            <TextField
              {...register("pw")}
              type="password"
              sx={{ width: "60%" }}
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Button
          size="large"
          type="submit"
          sx={{ background: "#E0BFE6", width: "50%", marginTop: "80px" }}
          variant="contained"
        >
          로그인
        </Button>
        <Link to="/Signup">
          <Typography sx={{ cursor: "pointer" }} mt={5} color="#9A44AA">
            계정이 없으신가요?
          </Typography>
        </Link>
      </Container>
    </form>
  );
}

export default Login;
