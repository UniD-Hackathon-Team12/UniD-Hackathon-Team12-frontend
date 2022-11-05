import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Icon,
  ListItem,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom';

export interface NovelCardProps {
  title: string;
  keyword: string[];
  like: number;
  type: string;
  currentCount: number;
  maxCount: number;
  isFinished?: boolean;
  isLike?: boolean;
  forDetail?: boolean;
}

function NovelCard(props: NovelCardProps) {
  const {
    title,
    keyword,
    like,
    isLike = false,
    type,
    currentCount,
    maxCount,
    isFinished = false,
    forDetail = false,
  } = props;
  return (
    <Grid item xs={12} sm={forDetail ? 12 : 6} lg={forDetail ? 12 : 4}>
      <Card>
        <CardContent>
          <Box
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
            mb={3}
          >
            <Typography
              sx={{ fontSize: 14, textAlign: "left" }}
              color="text.secondary"
            >
              {type}
            </Typography>
            <Chip
              icon={<Icon>{isLike ? "favorite" : "favorite_border"}</Icon>}
              label={like}
              variant="outlined"
              color="error"
              onClick={() => { }}
            />
          </Box>
          <Typography variant="h5">{title}</Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "12px",
            }}
            marginTop={2}
          >
            {isFinished && <Chip label={"완결"} color="primary"></Chip>}
            {!isFinished && (
              <Chip label={`${currentCount} / ${maxCount}`} color="primary" />
            )}
            {keyword.map((k, i) => (
              <Chip label={k} onClick={() => { }}></Chip>
            ))}
          </Box>
        </CardContent>
        {!forDetail && (
          <CardActions>
            <Link to='/novel-detail'><Button> 자세히 보기</Button></Link>
          </CardActions>
        )}
      </Card>
    </Grid >
  );
}

export default NovelCard;
