import { Grid, Card, CardContent, Typography } from "@mui/joy";

export function PostGrid() {
  const gratitudeList = [
    "For myself!",
    "I am grateful for the chirping panther",
    "I am grateful for the chirping mimi and her cute cat ears",
    "I am grateful for the chirping elephant, I am grateful for the chirping elephant.",
    "I am grateful for the chirping lion",
    "I am grateful for the chirping monkey",
  ];

  return (
    <Grid container spacing={3}>
      {gratitudeList.map((post, index) => (
        <Grid key={index}>
          <Card
            variant="solid"
            sx={{
              height: "70px",
              width: "280px",
              backgroundColor: "#e6e6fa",
            }}
          >
            <CardContent>
              <Typography level="body-md">{post}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
