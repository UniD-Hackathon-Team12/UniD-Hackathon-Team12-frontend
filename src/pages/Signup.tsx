import React from 'react';
import { Button, TextField, Stack,Container, Typography, Box } from '@mui/material';

type SignupProps = {
  name: string;
};

const Signup: React.FC<SignupProps> = ({ name }) => (
    <div>
        {/* <div>Hello, {name}</div> */}
        <Container fixed maxWidth="lg">
            <Stack alignItems="center" spacing={3}>
                <TextField id="outlined-basic" sx={{width:"50%"}} label="ID" variant="outlined" />
                <TextField id="outlined-basic" sx={{width:"50%"}} label="PASSWORD" variant="outlined" />
                <Button sx={{width:"30%", marginTop:"30px"}} variant="contained">Sign Up</Button>
            </Stack>
        </Container>
    </div>
);

export default Signup;