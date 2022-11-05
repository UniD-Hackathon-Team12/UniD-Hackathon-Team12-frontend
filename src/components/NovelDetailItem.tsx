import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@mui/material";

export interface NovelDetailItemProps {
  maker: string;
  number: number;
  content: string;
}

function NovelDetailItem(props: NovelDetailItemProps) {
  const { maker, number, content } = props;
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Box display={"flex"} justifyContent="space-between" mb={3}>
            <Typography color="text.secondary">#{number}</Typography>
            <Typography color="text.secondary">{maker} 님</Typography>
          </Box>
          <Typography align="left">{content}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
export default NovelDetailItem;
