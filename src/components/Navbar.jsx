import { Forum, Mail, Notifications } from "@mui/icons-material";
import { AppBar, Avatar, Badge, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled('div')(({theme}) => ({
  backgroundColor:'white',
  padding:'0 10px',
  borderRadius: theme.shape.borderRadius,
  width:'40%'
}))
const Icons = styled('Box')(({theme}) => ({
  display:'none',
  gap:'20px',
  alignItems:'center',
  "&:hover":{cursor:'pointer'},
  [theme.breakpoints.up('sm')]: {
    display:'flex'
  }
}))
const UserIcon = styled('Box')(({theme}) => ({
  display:'flex',
  gap:'20px',
  alignItems:'center',
  "&:hover":{cursor:'pointer'},
  [theme.breakpoints.up('sm')]: {
    display:'none'
  }
})) 

const Navbar = () => {
  const [open,setOpen] = useState(false)
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:'none',sm:'block'}}}>Mohamed Mounir</Typography>
        <Forum sx={{display:{xs:'block',sm:'none'}}}/>
        <Search><InputBase placeholder="Search"/></Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white"/>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications color="white"/>
          </Badge>
        <Avatar onClick={(e) => setOpen(true)} sx={{width:'30px',height:'30px'}} src='images/myPic.jpg' />
        </Icons>
        <UserIcon onClick={(e) => setOpen(true)} sx={{cursor:'pointer',"&:hover":{cursor:'pointer'}}}>
        <Avatar  sx={{width:'30px',height:'30px'}} src='images/myPic.jpg' />
        <Typography variant="span">Login</Typography>
        </UserIcon>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
