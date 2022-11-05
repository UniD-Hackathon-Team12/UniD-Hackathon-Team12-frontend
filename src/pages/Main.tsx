import {
  Box,
  Button,
  Card,
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
    <Box paddingX={3} my={3} gap={3} display="flex" flexDirection={"column"}>
      <Card>
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
      <Grid container spacing={2}>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <NovelCard
              title={`첫번째 문장입니다 123123 ${i}`}
              keyword={["키워드1", "키워드2", "키워드3"]}
              type={
                i % 3 === 0
                  ? "5자"
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
    </Box>
  );
}

export default Main;
