import React from 'react';
import { Button, TextField, Stack,Container, Typography, Grid } from '@mui/material';
import { Link } from "react-router-dom";


function Login() {
    return (
        <div>
            <Container fixed maxWidth="lg" sx={{marginTop:"100px"}}>
                <Grid container alignItems="center" spacing={5}>
                    <Grid item xs={4} container direction="row" justifyContent="flex-end">
                        <Typography>아이디</Typography>
                    </Grid>
                    <Grid item xs={8} container direction="row" justifyContent="flex-start">
                        <TextField id="outlined-basic" sx={{width:"60%"}} variant="outlined" />
                    </Grid>

                    <Grid item xs={4} container direction="row" justifyContent="flex-end">
                    <Typography>비밀번호</Typography>
                    </Grid>
                    <Grid item xs={8} container direction="row" justifyContent="flex-start">
                        <TextField id="outlined-basic" sx={{width:"60%"}} variant="outlined" />
                    </Grid>
                </Grid>
                <Button size="large" sx={{background:"#E0BFE6", width:"50%", marginTop:"80px"}} variant="contained">로그인</Button>
                <Link to="/Signup">
                    <Typography sx={{cursor:"pointer"}} mt={5} color="#9A44AA">계정이 없으신가요?</Typography>
                </Link>
            </Container>
        </div>
    );
  }
  
export default Login;
