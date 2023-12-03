import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Box from "@mui/joy/Box";
import Textarea from "@mui/joy/Textarea";
import Add from "@mui/icons-material/Add";

export default function Home() {
  return (
    <Box padding="20px">

      <Box display="flex" justifyContent="space-between" marginBottom="50px">
        <Box>
          <Typography level="h1">Gratitudes</Typography>
          <Typography level="title-lg">A community board for sharing everyday gratitudes ✨</Typography>
        </Box>
        <Box alignSelf="flex-start">
          <Button variant="soft" startDecorator={<Add />}>
            Add gratitude
          </Button>
        </Box>
      </Box>

      <Card
        variant="outlined"
        sx={{
          minHeight: "280px",
          width: 320,
          backgroundColor: "#e6e6fa",
          borderColor: "#000",
          border: "2px solid",
        }}
      >
        <Typography level="h2" fontSize="lg" textColor="#000">
          My Gratitude
        </Typography>

        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            background: "#b0c4de",
            border: "1px solid",
            borderColor: "#000",
          }}
        >
          <Textarea
            size="sm"
            placeholder="I am grateful for.."
            variant="plain"
          />
        </CardContent>
      </Card>
    </Box>
  );
}
