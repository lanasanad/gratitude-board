import { Grid, Card, CardContent, Typography } from "@mui/joy";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export type Post = {
  title: string;
};

const firebaseConfig = {
  databaseURL: "https://gratitudeboard-default-rtdb.firebaseio.com",
  apiKey: "AIzaSyBd8-lppHWAGCyv8_yyqkAI5ohcFW_1MZs",
  authDomain: "gratitudeboard.firebaseapp.com",
  projectId: "gratitudeboard",
  storageBucket: "gratitudeboard.appspot.com",
  messagingSenderId: "993228113683",
  appId: "1:993228113683:web:33dce4ea20305235123ce6",
  measurementId: "G-CS1L97CFDN",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function PostGrid() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postsRef = ref(db, "posts");
    const unsubscribe = onValue(postsRef, (snapshot) => {
      const rawPostList = snapshot.val();
      if (rawPostList) {
        const postList = Object.values(rawPostList) as Post[];
        setPosts(postList);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Grid container spacing={3}>
      {posts.map((post, index) => (
        <Grid
          component="div"
          key={index}
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{ display: "flex" }}
        >
          <Card variant="outlined"
           sx={{
              borderRadius: "16px",
              backgroundColor: "rgba(243, 255, 250, 0.5)",
            }}
            >
            <CardContent
              sx={{
                borderRadius: "16px",
                backgroundColor: "rgba(205, 230, 224, 0.4)",
                paddingX: 4,
                paddingTop: 3.5,
                paddingBottom: 3.5,
                wordWrap: "break-word",
              }}
            >
              <Typography
                level="body-md"
                sx={{
                  borderRadius: "64px",
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
                  font: "#a5d9d0"
                }}
              >
                {post.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
