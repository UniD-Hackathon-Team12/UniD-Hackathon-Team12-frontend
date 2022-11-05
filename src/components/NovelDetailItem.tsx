import { Grid } from "@mui/material";

export interface NovelDetailItemProps {
    storyItem: string;
}

function NovelDetailItem(props: NovelDetailItemProps) {
    const {
        storyItem,
    } = props;
    return (
        <Grid item xs={12} sm={6} lg={4}>
        </Grid>
    );
}
export default NovelDetailItem;