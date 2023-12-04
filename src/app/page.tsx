'use client'

import * as React from "react";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Box from "@mui/joy/Box";
import Add from "@mui/icons-material/Add";
import { PostGrid } from "./components/PostGrid";
import { useState } from "react";
import { Modal } from "@mui/material";
import { DialogTitle, ModalDialog, Textarea } from "@mui/joy";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
//import {v4 as uuidv4} from 'uuid';


export default function Home() {
  // let myuuid = uuidv4();

  function savePost() {
    console.log("enters")
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    set(ref(db, "/posts"), {
      title: "I am grateful for dogs",
      description: "becasue they are adorable",

    });
  }


  const firebaseConfig = {
    databaseURL: "https://gratitudeboard-default-rtdb.firebaseio.com",
    
    apiKey: "AIzaSyBd8-lppHWAGCyv8_yyqkAI5ohcFW_1MZs",
    authDomain: "gratitudeboard.firebaseapp.com",
    projectId: "gratitudeboard",
    storageBucket: "gratitudeboard.appspot.com",
    messagingSenderId: "993228113683",
    appId: "1:993228113683:web:33dce4ea20305235123ce6",
    measurementId: "G-CS1L97CFDN"
  };
  
  
  const [openForm, setOpenForm] = useState(false)

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
          <Button variant="soft" startDecorator={<Add />} onClick={() => setOpenForm(true)}>
            Add gratitude
          </Button>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center">
        <PostGrid />
      </Box>

      <Modal open={openForm} onClose={() => setOpenForm(false)}>
        <ModalDialog> 
          <DialogTitle> Add gratitude</DialogTitle>
          <Textarea minRows={3} placeholder="I am grateful for..."  ></Textarea>
          <Button variant="soft" onClick={() => savePost()} >Submit</Button>
        </ModalDialog>

      </Modal>

    </Box>
  );
}
