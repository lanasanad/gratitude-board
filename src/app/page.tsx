import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Add from "@mui/icons-material/Add";
import { PostGrid } from "./components/PostGrid";

export default function Home() {
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
        <PostGrid />
      </Box>
    </Box>
  );
}
