"use client";

import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Add from "@mui/icons-material/Add";
import { PostGrid } from "./components/PostGrid";
import { useState } from "react";
import { Modal } from "@mui/material";
import { DialogTitle, ModalDialog, Input } from "@mui/joy";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { Grid, Card, CardContent } from "@mui/joy";
import IconButton from '@mui/material/IconButton';

type Post = {
  title: string;
}

export default function Home() {
  async function savePost(postTitle: string) {
    const post: Post = {
      title: postTitle
    }
    try {
      await axios.post('https://us-central1-gratitudeboard.cloudfunctions.net/app/posts', post, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
    )} catch (error) {
      console.error('Error fetching data:', error);
    }
  }

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

  const [openForm, setOpenForm] = useState(false);
  const [postTitle, setPostTitle] = useState("");

  return (
    <Box
    sx={{
    backgroundImage: 'url("flowers.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    //padding: "30px",
    boxSizing: "border-box",
    }}
    >



    <Box padding="30px">
      <Box display="flex" justifyContent="space-between" marginBottom="40px">
        <Box>
          <Typography
          level="h1"
          mb={1}
          sx={{
          fontFamily: 'BlinkMacSystemFont',
          fontSize: "500%",
          fontWeight: "bold",
          }}
          >
          Grateful.
          </Typography>
          {/* '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"', */}

      <Typography
        level="title-lg"
        sx={{
          fontFamily: '"Segoe UI"',
          fontSize: '120%',
        }}
      >
        A community board for sharing lifes gratitudes, no matter how big or small ✨
      </Typography>
        </Box>
        <Box alignSelf="flex-start">
          <Button
            variant="soft"
            size="lg"
            startDecorator={<Add />}
            onClick={() => setOpenForm(true)}
          >
            Add gratitude
          </Button>
        </Box>
      </Box>
      {/* posted gratitude cards  */}
      <Box display="flex" justifyContent="center">
        <PostGrid />   
      </Box>

      <Modal open={openForm} onClose={() => setOpenForm(false)}>
        <ModalDialog>
          <DialogTitle> Add gratitude</DialogTitle>
          <Input
            value={postTitle}
            onChange={(event) => {
              setPostTitle(event.target.value);
            }}
            placeholder="I am grateful for..."
          />
          <Button
            type="submit"
            variant="soft"
            onClick={async () => {
              await savePost(postTitle)
              setOpenForm(false)
              setPostTitle('')
            }}
          >
            Submit
          </Button>
        </ModalDialog>
      </Modal>
    </Box>
  </Box>
  
  );
}
