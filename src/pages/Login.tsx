import React from 'react';
import { Button, TextField, Stack,Container, Typography, Box } from '@mui/material';


function Login() {
    return (
        <div>
            {/* <div>Hello, {name}</div> */}
            <Container fixed maxWidth="lg" sx={{marginTop:"100px"}}>
                <Stack alignItems="center" spacing={3}>
                    <TextField id="outlined-basic" sx={{width:"50%"}} label="ID" variant="outlined" />
                    <TextField id="outlined-basic" sx={{width:"50%"}} label="PASSWORD" variant="outlined" />
                    <Button sx={{width:"30%", marginTop:"100px"}} variant="contained">Login</Button>
                    <Typography sx={{cursor:"pointer"}} color="primary">계정이 없으신가요?</Typography>
                </Stack>
            </Container>
        </div>
    );
  }
  
export default Login;
