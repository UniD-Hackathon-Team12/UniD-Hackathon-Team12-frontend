import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Icon,
  TextField,
  Typography,
} from "@mui/material";
import NovelCard from "../components/NovelCard";
import { Link } from "react-router-dom";
import useSWR from "swr";
import { getCategoryNovelAPI } from "../api";
import { novelTypeToText } from "./MyPage";

export type novelType = "word" | "sentence" | "paragraph";

function NovelKind({ type }: { type: novelType }) {
  const { data } = useSWR("/novel/part", () => getCategoryNovelAPI(type));
  return (
    <Container sx={{ marginTop: "50px" }}>
      <Box display="flex" gap={10} mb={3}>
        <Typography align="left" variant="h4">
          {type === "word" && "한 단어 이어쓰기"}
          {type === "sentence" && "한 문장 이어쓰기"}
          {type === "paragraph" && "한 문단 이어쓰기"}
        </Typography>
        <Link to="/create">
          <Button variant="contained">
            <Icon sx={{ marginRight: 1 }}>add_circle_outline</Icon>
            새로 작성하기
          </Button>
        </Link>
      </Box>

      {/* <Typography align="left" mt={10} mb={5} variant="h5" color="#9A44AA">
        미완결 소설
      </Typography> */}
      <Grid container spacing={2}>
        {(data || []).map(
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

      {/* <Typography align="left" mt={10} mb={5} variant="h5" color="#9A44AA">
        완결 소설
      </Typography>
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
      </Grid> */}
    </Container>
  );
}

export default NovelKind;
