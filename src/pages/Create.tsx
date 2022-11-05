import React from 'react';
import { Button, TextField, Stack,Container, Typography, Box, Grid, Fab, Icon } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

function Create() {
    return (
        <div>
            {/* <div>Hello, {name}</div> */}
            <Container fixed maxWidth="lg">
                <Grid container alignItems="center" spacing={5}>
                    <Grid item xs={2}>
                        <Typography>카테고리</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography>한글자</Typography>
                    </Grid>

                    <Grid item xs={2}>
                        <Typography>키워드</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField id="outlined-basic" sx={{width:"100%"}} variant="outlined" />
                        <Icon>add_circle_outline</Icon>
                    </Grid>

                    <Grid item xs={2}>
                    <Typography>최대 릴레이 개수</Typography>
                    </Grid>
                    <Grid item xs={10}>
                    <TextField
                        id="outlined-number"
                        InputProps={{
                            endAdornment: <InputAdornment position="start">개</InputAdornment>,
                        }}
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        />
                    </Grid>

                    <Grid item xs={2}>
                    <Typography>시작 스토리</Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <TextField id="outlined-basic" sx={{width:"100%"}} variant="outlined" />
                    </Grid>
                </Grid>
                <Button sx={{width:"30%", marginTop:"30px"}} variant="contained">등록</Button>
            </Container>
        </div>
    );
  }
  
export default Create;