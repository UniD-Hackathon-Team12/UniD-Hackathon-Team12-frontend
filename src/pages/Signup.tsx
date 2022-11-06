import React from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Typography,
  Box,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { signupAPI } from "../api";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  return (
    <form
      onSubmit={handleSubmit(async (t) => {
        const { id, pw, pwcheck } = t;
        const ID = id.trim();
        const PW = pw.trim();
        const PWCHECK = pwcheck.trim();
        if (ID.length === 0 || PW.length === 0 || PWCHECK.length === 0) {
          alert("입력되지 않은 값이 있습니다.");
          return;
        }
        if (PW !== PWCHECK) {
          alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
          return;
        }
        const res = await signupAPI(ID, PW);
        if (res === null) {
          alert("오류가 발생했습니다.");
          return;
        }
        alert("회원가입에 성공했습니다. 로그인 해주세요.");
        navigate("/login");
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
              sx={{ width: "60%" }}
              variant="outlined"
              type="password"
            />
          </Grid>
          <Grid item xs={4} container direction="row" justifyContent="flex-end">
            <Typography>비밀번호 확인</Typography>
          </Grid>
          <Grid
            item
            xs={8}
            container
            direction="row"
            justifyContent="flex-start"
          >
            <TextField
              {...register("pwcheck")}
              sx={{ width: "60%" }}
              variant="outlined"
              type="password"
            />
          </Grid>
        </Grid>
        <Button
          size="large"
          sx={{ background: "#E0BFE6", width: "50%", marginTop: "80px" }}
          variant="contained"
          type="submit"
        >
          회원가입
        </Button>
      </Container>
    </form>
  );
}

export default Signup;
