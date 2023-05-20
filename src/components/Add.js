import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";

const StyleModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  mb: "20px",
});

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={(e) => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: "20px",
          left: { xs: "calc(50% - 25px)", md: "30px" },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyleModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={5}>
          <Typography variant="h6" color={"grey"} textAlign={"center"}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar sx={{width:'30px',height:'30px'}} alt="Mohamed Mounir" src="images/myPic.jpg" />
            <Typography fontWeight={500} variant="span">
              Mohamed Mounir
            </Typography>
          </UserBox>
          <TextField
          
            sx={{ width: "100%",marginTop:'12px' }}
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>

          <ButtonGroup
          fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
            <Button sx={{width:"100px"}}>
                <DateRange/>
            </Button>
          </ButtonGroup>
        </Box>
      </StyleModal>
    </>
  );
};

export default Add;
