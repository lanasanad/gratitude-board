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

  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://us-central1-gratitudeboard.cloudfunctions.net/app/posts');
  //       setPosts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);


  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const postsRef = ref(db, "posts");

  const unsubscribe = onValue(postsRef, (snapshot) => {
    const rawPostList = snapshot.val();
    const postList = Object.values(rawPostList) as Post[];
    setPosts(postList);
  });

  return () => {
    unsubscribe();
  };
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
