import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import Feed from "./components/Feed";
import { Box, Grid, Stack, ThemeProvider, createTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Add from "./components/Add";
import { useState } from "react";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function App() {
  const [mode, setMode] = useState('light')
  const darkTheme  = createTheme ({
    palette:{
      mode:mode
    }
  })
  return (
    <>
      <ThemeProvider theme={darkTheme}>

   
      <Box bgcolor={'background.default'} color={'text.primary'}>
      <Navbar />
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}  >
          <Sidebar mode={mode} setMode={setMode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add/>
      </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
