import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Box from "@mui/joy/Box";
import Grid from "@mui/joy/Grid";
import Textarea from "@mui/joy/Textarea";
import Add from "@mui/icons-material/Add";

export default function Home() {
  const gratitudeList = [
    "For myself!",
    "I am grateful for the chirping panther",
    "I am grateful for the chirping mimi and her cute cat ears",
    "I am grateful for the chirping elephant, I am grateful for the chirping elephant.",
    "I am grateful for the chirping lion",
    "I am grateful for the chirping monkey",
  ];

  return (
    <Box padding="30px">
      <Box display="flex" justifyContent="space-between" marginBottom="40px">
        <Box>
          <Typography level="h1" mb={1}>
            Gratitudes
          </Typography>
          <Typography level="title-lg">
            A community board for sharing everyday gratitudes ✨
          </Typography>
        </Box>
        <Box alignSelf="flex-start">
          <Button variant="soft" startDecorator={<Add />}>
            Add gratitude
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={3}>
          {gratitudeList.map((post, index) => (
            <Grid>
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
      </Box>
    </Box>
  );
}
