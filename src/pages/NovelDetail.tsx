import { Grid, TextField } from "@mui/material";
import React from "react";
import NovelDetailItem from "../components/NovelDetailItem";

function NovelDetail() {
    <div>
        <div>
            <Grid container spacing={2} paddingX={3} marginTop={3}>
                {Array(10)
                    .fill(0)
                    .map((_, i) => (
                        <NovelDetailItem
                            storyItem={`첫번재 댓글`}
                        />
                    ))}
            </Grid>
        </div>
        <TextField fullWidth label="fullWidth" id="fullWidth" />
    </div>
}
export default NovelDetail;