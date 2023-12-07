import { Grid, Card, CardContent, Typography } from "@mui/joy";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";

type Post = {
  title: String
}
export function PostGrid() {
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
  
  function getAllPosts(): Post[] {
    console.log("hello")
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    const posts = ref(db, "posts/");

    let postList = [] as Post[]

    onValue(posts, (snapshot) => {
      const map = snapshot.val(); // map, key = id, value object {title: "blabhhdhbd"}
      postList = Object.values(map) // = [{title: "parrot"}, {title: "get loose"}]
    });

    return postList;
  }

  const posts = getAllPosts()
  
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
