import React, { useState } from "react";
import {
  Button,
  TextField,
  Stack,
  Container,
  Typography,
  Box,
  Grid,
  Fab,
  Icon,
  InputLabel,
  FormControlLabel,
  Input,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { useFieldArray, useForm } from "react-hook-form";
import KeywordSearch from "../components/KeywordSearch";
import { createNovelAPI } from "../api";
import { novelType } from "./NovelKind";
import { useLogin } from "../useLogin";

function Create() {
  const [KeywordList, setKeywordList] = useState([]);
  const { data: loginData } = useLogin();
  const useFormReturn = useForm({
    defaultValues: {
      keyword: [{ value: "" }],
      type: "word",
      maxCount: 30,
      firstStory: "",
    },
  });
  const { control, register, handleSubmit } = useFormReturn;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "keyword",
  });

  return (
    <form
      onSubmit={handleSubmit(async (d) => {
        if (!loginData?.login) return;
        const { keyword, type, maxCount, firstStory } = d;
        const res = await createNovelAPI({
          category: d.type as novelType,
          firstStory,
          maxCount,
          keyword: keyword.map((t) => t.value),
          userId: loginData.data.user_id,
        });
      })}
    >
      <Container fixed maxWidth="lg" sx={{ marginTop: "50px" }}>
        <Grid container alignItems="flex-start" spacing={5}>
          <Grid item xs={2} container direction="row" justifyContent="flex-end">
            <Typography>카테고리</Typography>
          </Grid>
          <Grid
            item
            xs={10}
            container
            direction="row"
            justifyContent="flex-start"
          >
            <Select {...register("type")} defaultValue="word">
              <MenuItem value="word">한 글자 (5자)</MenuItem>
              <MenuItem value="sentence">한 문장 (30자)</MenuItem>
              <MenuItem value="paragraph">한 문단 (200자)</MenuItem>
            </Select>
          </Grid>

          <Grid item xs={2} container direction="row" justifyContent="flex-end">
            <Typography>키워드</Typography>
          </Grid>
          <Grid item xs={10}>
            <Box
              display={"flex"}
              flexDirection="column"
              alignItems={"center"}
              width="full"
              gap={1}
            >
              {fields.map(({ id }, i) => (
                <Box
                  width={"100%"}
                  display="flex"
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={2}
                  key={id}
                >
                  <KeywordSearch
                    key={id}
                    id={`keyword.${i}`}
                    useForm={useFormReturn}
                    addable
                  />
                  <Fab
                    color="primary"
                    onClick={() => remove(i)}
                    sx={{ flexShrink: 0 }}
                  >
                    <Icon>delete</Icon>
                  </Fab>
                </Box>
              ))}
              {fields.length < 5 && (
                <Fab color="primary" onClick={() => append({ value: "" })}>
                  <Icon>add</Icon>
                </Fab>
              )}
            </Box>
          </Grid>

          <Grid item xs={2} container direction="row" justifyContent="flex-end">
            <Typography>최대 릴레이 개수</Typography>
          </Grid>
          <Grid
            item
            xs={10}
            container
            direction="row"
            justifyContent="flex-start"
          >
            <TextField
              {...register("maxCount")}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">개</InputAdornment>
                ),
              }}
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={2} container direction="row" justifyContent="flex-end">
            <Typography>시작 스토리</Typography>
          </Grid>
          <Grid
            item
            xs={10}
            container
            direction="row"
            justifyContent="flex-start"
          >
            <TextField
              sx={{ width: "100%" }}
              {...register("firstStory")}
              id="outlined-multiline-static"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Button
          size="large"
          sx={{ background: "#E0BFE6", width: "30%", marginTop: "30px" }}
          variant="contained"
          type="submit"
        >
          등록
        </Button>
      </Container>
    </form>
  );
}

export default Create;
