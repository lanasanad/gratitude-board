import { Grid, Card, CardContent, Typography } from "@mui/joy";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

type Post = {
  title: String
}
export function PostGrid() {
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://us-central1-gratitudeboard.cloudfunctions.net/app/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <Grid container spacing={3}>
      {posts.map((post, index) => (
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
              <Typography level="body-md">{post.title}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
