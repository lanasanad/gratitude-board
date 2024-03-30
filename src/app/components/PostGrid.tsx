import { Grid, Card, CardContent, Typography } from "@mui/joy";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export type Post = {
  title: String
}
// type PostGridProps = {
//   posts: Post[];
// };

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
        <Grid key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
          <Card variant="outlined">
            <CardContent
              sx={{
                borderRadius: '16px',
                backgroundColor: "#FFFAF0",//inner
                paddingX: 4,
                paddingTop: 3.5,
                paddingBottom: 3.5,
                wordWrap: "break-word",
              }}
            >
              <Typography
                level="body-md"
                sx={{
                  borderRadius: '64px',
                  fontFamily: "Arial, sans-serif",
                  fontSize: "18px",
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
//     <Grid container spacing={3}>
//       {posts.map((post, index) => (
//         <Grid key={index}>
//           <Card variant="solid"
//             sx={{
//               height: "70px",
//               width: "280px",
//               backgroundColor: "#e6e6fa",
//             }}
//           >
//              <CardContent>
//               <Typography
//                 level="body-md"
//                 sx={{
//                   fontFamily: '"Segoe UI"', 
//                   //fontWeight: "bold",                  
//                   fontSize: "16px", 
//                 }}
//               >
//                 {post.title}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }
