import { Box } from "@mui/material"
import Post from "./Post"

const Feed = () => {
  return (
    <Box  flex={4} p={2} >
      <Post img={'images/myPic.jpg'} title={'Mohamed Mounir'} src={'images/myPic.jpg'}/>
      <Post img={'https://material-ui.com/static/images/avatar/2.jpg'} title={'Sherif Mohamed'} src={'images/pic2.jpg'}/>
      <Post img={'https://material-ui.com/static/images/avatar/5.jpg'} title={'Mohamed Abdel Hamid'} src={'images/pic3.jpg'}/>
      <Post img={'https://material-ui.com/static/images/avatar/1.jpg'} title={'Khalil Gad'} src={'images/pic4.jpg'}/>
    </Box>
  )
}

export default Feed
