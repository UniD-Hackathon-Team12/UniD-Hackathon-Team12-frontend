import { Box, Button, ButtonGroup, Grid, Typography } from "@mui/material";
import SelectedListItem from "../components/SelectedListItem";
import React, { useState, useEffect } from "react";
import NovelCard from "../components/NovelCard";
import { useLogin, useLoginCheck } from "../useLogin";
import useSWR from "swr";
import { getMyPageAPI } from "../api";
import { novelType } from "./NovelKind";

export type myPageType = "written" | "participated" | "liked";

export const novelTypeToText: { [x in novelType]: string } = {
  word: "한 단어 (5자)",
  sentence: "한 문장 (30자)",
  paragraph: "한 문단 (200자)",
};

function MyPage() {
  const [Id, setId] = useState("");
  const [Type, setType] = useState<myPageType>("written");
  const { data: loginData } = useLogin();
  const loginCheck = useLoginCheck();
  const { data } = useSWR(
    "/user/mypage",
    loginCheck(() => getMyPageAPI())
  );

  if (!loginData?.login || !data) return <></>;
  return (
    <Box display={"flex"} flexDirection="column" my={3} gap={3} px={3}>
      <Typography
        mt={5}
        mb={3}
        variant="h4"
      >{`${loginData.data.nickname} 님의 마이페이지`}</Typography>
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
        {data[Type].map(
          (
            {
              novel_id,
              category,
              n_content,
              like_count,
              relay_count,
              active,
              max_num,
            },
            i
          ) => (
            <NovelCard
              title={n_content}
              keyword={["키워드1", "키워드2", "키워드3"]}
              type={novelTypeToText[category]}
              maxCount={max_num}
              currentCount={relay_count}
              like={like_count}
              isFinished={!active}
              id={novel_id}
              //   isLike={i % 2 === 1}
            />
          )
        )}
      </Grid>
    </Box>
  );
}

export default MyPage;
