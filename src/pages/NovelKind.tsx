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

export type novelType = "word" | "sentence" | "paragraph";

function NovelKind({ type }: { type: novelType }) {
    return (
        <Container sx={{ marginTop: "100px" }}>
            <Typography mr={1} flexShrink={0}>
                {type}
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
            </Grid>
        </Container>
    )
}

export default NovelKind;