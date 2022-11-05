import { Grid } from "@mui/material";
import React from "react";
import NovelCard from "../components/NovelCard";

function Main() {
  return (
    <div>
      <Grid container spacing={2} paddingX={3} marginTop={3}>
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
            />
          ))}
      </Grid>
    </div>
  );
}

export default Main;
