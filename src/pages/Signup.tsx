import React from 'react';
import { Button, TextField, Grid, Container, Typography, Box } from '@mui/material';


function Signup() {
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
                <Button sx={{background:"#E0BFE6", width:"50%", marginTop:"80px"}} variant="contained">회원가입</Button>
            </Container>
        </div>
    );
  }
  
export default Signup;