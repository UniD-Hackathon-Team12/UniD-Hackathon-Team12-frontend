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
  Container,
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import { getFamousNovelAPI, getKeywordRankAPI } from "../api";
import KeywordSearch from "../components/KeywordSearch";
import NovelCard from "../components/NovelCard";
import { novelTypeToText } from "./MyPage";

export type mainType = "main" | "search" | "keyword" | "keywordSearch";

function Main({ type }: { type: mainType }) {
  const useFormReturn = useForm({
    defaultValues: { keyword: { value: "" }, word: "" },
  });
  const a = useParams();
  const { word = null } = a;
  const navigate = useNavigate();
  const { data: famousData } = useSWR(
    (type === "keyword" || type === "main") && "/novel/all",
    () => getFamousNovelAPI()
  );
  // const { data: searchData } = useSWR( type === 'search' && '/')
  const { data: keywordData } = useSWR("/keyword/rank", () =>
    getKeywordRankAPI()
  );
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Card sx={{ width: "100%" }}>
        <form
          onSubmit={useFormReturn.handleSubmit((t) => {
            if (type === "keyword" || type === "keywordSearch") {
              const { keyword = { value: "" } } = t;
              const { value } = keyword;
              if (value.trim().length === 0) return;
              navigate(`/keyword/search/${value.trim()}`);
            } else {
              const { word = "" } = t;
              if (word.trim().length === 0) return;
              navigate(`/search/${word.trim()}`);
            }
          })}
        >
          <Box paddingX={3} pt={3} display="flex" gap={3}>
            {type === "keyword" || type === "keywordSearch" ? (
              <KeywordSearch useForm={useFormReturn} id="keyword" />
            ) : (
              <TextField
                {...useFormReturn.register("word")}
                label="검색하기"
                variant="standard"
                fullWidth
              />
            )}
            <Button variant="contained" type="submit">
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
            {(keywordData || []).slice(0, 5).map(({ keywords }, i) => (
              <Link to={`/keyword/search/${keywords}`}>
                <Chip onClick={() => {}} label={keywords}></Chip>
              </Link>
            ))}
            <Link
              to={
                type === "keyword" || type === "keywordSearch"
                  ? "/"
                  : "/keyword"
              }
            >
              <Button variant="contained" sx={{ marginLeft: "12px" }}>
                {type === "keyword" || type === "keywordSearch"
                  ? "내용 검색으로"
                  : "키워드 검색으로"}
              </Button>
            </Link>
          </Box>
        </form>
      </Card>

      {/* <Box display="flex" alignItems="flex-start" mt={5} p={2} sx={{width:"100%", background:"#E0BFE6"}}> */}
      <Typography align="left" mt={10} mb={5} variant="h5" color="#9A44AA">
        {(type === "main" || type === "keyword") && "인기 릴레이 소설"}
        {type === "search" && `${word}에 대한 검색 결과`}
        {type === "keywordSearch" && `키워드 ${word}에 대한 검색 결과`}
      </Typography>
      {/* </Box> */}

      <Grid container spacing={2}>
        {(type === "main" || type === "keyword" ? famousData || [] : []).map(
          (
            {
              novel_id,
              category,
              max_num,
              n_content,
              like_count,
              relay_count,
              active,
              keywords,
            },
            i
          ) => (
            <NovelCard
              id={novel_id}
              title={n_content}
              keyword={keywords}
              type={novelTypeToText[category]}
              maxCount={max_num}
              currentCount={relay_count}
              like={like_count}
              isFinished={!active}
              // isLike={i % 2 === 1}
            />
          )
        )}
      </Grid>

      <Typography align="left" mt={10} mb={5} variant="h5" color="#9A44AA">
        릴레이 소설 작성하기
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Link to="/novel-kind/word">
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
                <img style={{ width: "100%" }} src="wordRelay.png" />
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/novel-kind/sentence">
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
                <img style={{ width: "100%" }} src="sentenceRelay.png" />
              </CardContent>
            </Card>
          </Link>
        </Grid>
        <Grid item xs={12} md={4}>
          <Link to="/novel-kind/paragraph">
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
                <img style={{ width: "100%" }} src="paragraphRelay.png" />
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
