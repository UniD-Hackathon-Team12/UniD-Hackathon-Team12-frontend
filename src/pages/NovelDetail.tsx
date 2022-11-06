import {
  Button,
  Card,
  CardContent,
  Fab,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef } from "react";
import KeywordSearch from "../components/KeywordSearch";
import NovelCard from "../components/NovelCard";
import NovelDetailItem from "../components/NovelDetailItem";
import { Link, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addNovelKeywordAPI, getEachNovelAPI, makeCommentAPI } from "../api";
import { useLogin } from "../useLogin";
import useSWR from "swr";
import { novelTypeToText } from "./MyPage";

function NovelDetail() {
  const lastRef = useRef<any>(null);
  const { id } = useParams();
  const commentForm = useForm();
  const keywordForm = useForm({ defaultValues: { keyword: { value: "" } } });
  const { data: loginData } = useLogin();
  const { data, mutate } = useSWR(id && `/novel/${id}`, () =>
    getEachNovelAPI(id || -1)
  );
  if (!data) return <></>;
  const info = data[0];

  return (
    <div>
      <Grid container spacing={2} paddingX={3} marginY={8}>
        <NovelCard
          title={info.n_content}
          keyword={info.keywords}
          type={novelTypeToText[info.category]}
          maxCount={info.max_num}
          currentCount={info.relay_count}
          like={info.like_count}
          forDetail
        />
        {data.slice(1).map(({ r_content }, i) => (
          <NovelDetailItem
            maker={`maker${i}`}
            content={r_content}
            number={i + 1}
          />
        ))}
        <Grid item xs={12}>
          <Button variant="contained">더 보기</Button>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <form
                onSubmit={commentForm.handleSubmit(async (t) => {
                  if (!loginData?.login || !id) return;
                  const res = await makeCommentAPI(
                    parseInt(id),
                    loginData.data.user_id,
                    t.comment
                  );
                  if (!res) alert("오류가 발생했습니다.");
                  else {
                    mutate();
                    commentForm.reset();
                  }
                })}
              >
                <Box display={"flex"} justifyContent="flex-start" mb={2}>
                  <Typography color="text.secondary">
                    #{data.length}이(가) 될 예정
                  </Typography>
                </Box>
                <TextField
                  label={"작성하기"}
                  {...commentForm.register("comment")}
                  fullWidth
                  multiline
                  rows={4}
                ></TextField>
                <Box display={"flex"} justifyContent="flex-end" mt={2}>
                  <Button variant="contained" type="submit">
                    작성
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} ref={lastRef}>
          <Card>
            <CardContent>
              <form
                onSubmit={keywordForm.handleSubmit(async (t) => {
                  if (!loginData?.login || !id) return;
                  const res = await addNovelKeywordAPI(
                    parseInt(id),
                    t.keyword.value
                  );
                  if (!res) alert("오류가 발생했습니다.");
                  else {
                    mutate();
                    keywordForm.reset();
                  }
                })}
              >
                <Box display={"flex"} justifyContent="flex-start" mb={2}>
                  <Typography color="text.secondary">
                    키워드 추가하기
                  </Typography>
                </Box>
                <KeywordSearch addable useForm={keywordForm} id="keyword" />
                <Box display={"flex"} justifyContent="flex-end" mt={2}>
                  <Button variant="contained" type="submit">
                    추가
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Box
        position={"sticky"}
        bottom={30}
        display="flex"
        justifyContent={"flex-end"}
        pr={3}
      >
        <Fab
          color="primary"
          aria-label="add"
          onClick={() => {
            if (lastRef?.current) lastRef.current.scrollIntoViewIfNeeded();
          }}
        >
          <Icon>edit</Icon>
        </Fab>
      </Box>
    </div>
  );
}
export default NovelDetail;
