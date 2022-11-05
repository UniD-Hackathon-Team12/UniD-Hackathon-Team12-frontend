import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import SelectedListItem from "../components/SelectedListItem";
import React, { useState, useEffect } from "react";
import NovelCard from "../components/NovelCard";

export type myPageType = "written" | "participated" | "liked";

function MyPage() {
  const [Id, setId] = useState("");
  const [Type, setType] = useState<myPageType>("written");

  return (
    <Box display={"flex"} flexDirection="column" my={3} gap={3} px={3}>
      <Typography variant="h4">{`${Id} 님의 마이페이지`}</Typography>
      <ButtonGroup fullWidth>
        <Button
          onClick={() => setType("written")}
          variant={Type === "written" ? "contained" : "outlined"}
        >
          내가 작성한 글
        </Button>
        <Button
          onClick={() => setType("participated")}
          variant={Type === "participated" ? "contained" : "outlined"}
        >
          내가 참여한 글
        </Button>
        <Button
          onClick={() => setType("liked")}
          variant={Type === "liked" ? "contained" : "outlined"}
        >
          내가 찜한 글
        </Button>
      </ButtonGroup>
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

export default MyPage;
