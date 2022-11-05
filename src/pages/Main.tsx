import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import NovelCard from "../components/NovelCard";

function Main() {
  return (
    <Box
      paddingX={3}
      my={3}
      gap={3}
      display="flex"
      flexDirection={"column"}
      alignItems="flex-start"
    >
      <Card sx={{ width: "100%" }}>
        <Box paddingX={3} pt={3} display="flex" gap={3}>
          <TextField
            id="standard-basic"
            label="검색하기"
            variant="standard"
            fullWidth
          />
          <Button variant="contained">
            <Icon>search</Icon>
          </Button>
        </Box>
        <Box
          paddingX={3}
          pb={3}
          mt={2}
          display="flex"
          gap={1}
          alignItems="center"
          flexWrap={"wrap"}
        >
          <Typography mr={1} flexShrink={0}>
            인기 키워드
          </Typography>
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <Chip onClick={() => {}} label={`키워드${i}`}></Chip>
            ))}
        </Box>
      </Card>

      {/* <Box display="flex" alignItems="flex-start" mt={5} p={2} sx={{width:"100%", background:"#E0BFE6"}}> */}
        <Typography mt={5} variant="h5" color="#9A44AA" >
          인기 릴레이 소설
        </Typography>
      {/* </Box> */}
      <Grid container spacing={2}>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <NovelCard
              title={`첫번째 문장입니다 123123 ${i}`}
              keyword={["키워드1", "키워드2", "키워드3"]}
              type={
                i % 3 === 0
                  ? "한 단어 (5자)"
                  : i % 3 === 1
                  ? "한 문장 (30자)"
                  : "한 문단 (200자)"
              }
              maxCount={300}
              currentCount={i * 10}
              like={100}
              isFinished={i % 2 === 0}
              isLike={i % 2 === 1}
            />
          ))}
      </Grid>

      <Typography mt={5} variant="h5" color="#9A44AA" >
        릴레이 소설 작성하기
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 275,
              background: "#EFD7F3",
              border: "solid",
              borderRadius: 5,
              color: "black",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                한 단어 이어쓰기
              </Typography>
              <Typography mb={3} variant="body2">
                5자 이내의 내용을 릴레이로 이어서 작성합니다.
              </Typography>
              <img height='90' src="wordRelay.png" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 275,
              background: "#EFD7F3",
              border: "solid",
              borderRadius: 5,
              color: "black",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                한 문장 이어쓰기
              </Typography>
              <Typography mb={3} variant="body2">
                30자 이내의 내용을 릴레이로 이어서 작성합니다.
              </Typography>
              <img height='90' src="sentenceRalay.png" />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card
            sx={{
              cursor: "pointer",
              minWidth: 275,
              background: "#EFD7F3",
              border: "solid",
              borderRadius: 5,
              color: "black",
              height: "100%",
            }}
          >
            <CardContent>
              <Typography variant="h5" component="div">
                한 문단 이어쓰기
              </Typography>
              <Typography mb={3} variant="body2">
                200자 이내의 내용을 릴레이로 이어서 작성합니다.
              </Typography>
              <img height='90' src="paragraphRelay.png" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Main;
