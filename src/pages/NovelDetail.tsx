import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import KeywordSearch from "../components/KeywordSearch";
import NovelCard from "../components/NovelCard";
import NovelDetailItem from "../components/NovelDetailItem";

function NovelDetail() {
  return (
    <div>
      <Grid container spacing={2} paddingX={3} marginY={3}>
        <NovelCard
          title={`첫번째 문장입니다 123123`}
          keyword={["키워드1", "키워드2", "키워드3"]}
          type={"한 문장 (30자)"}
          maxCount={300}
          currentCount={30}
          like={100}
          forDetail
        />
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <NovelDetailItem
              maker={`maker${i}`}
              content={
                "가나다라마바사 아자차카타파하. 가나다라마바사 아자차카타파하. 가나다라마바사 아자차카타파하. 가나다라마바사 아자차카타파하. 가나다라마바사 아자차카타파하. 가나다라마바사 아자차카타파하. 가나다라마바사 아자차카타파하. 가나다라마바사 아자차카타파하."
              }
              number={i + 1}
            />
          ))}
        <Grid item xs={12}>
          <Button variant="contained">더 보기</Button>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box display={"flex"} justifyContent="flex-start" mb={2}>
                <Typography color="text.secondary">#{11}이 될 예정</Typography>
              </Box>
              <TextField
                label={"작성하기"}
                fullWidth
                multiline
                rows={4}
              ></TextField>
              <Box display={"flex"} justifyContent="flex-end" mt={2}>
                <Button variant="contained">작성</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Box display={"flex"} justifyContent="flex-start" mb={2}>
                <Typography color="text.secondary">키워드 추가하기</Typography>
              </Box>
              <KeywordSearch addable />
              <Box display={"flex"} justifyContent="flex-end" mt={2}>
                <Button variant="contained">추가</Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
export default NovelDetail;
