import { Box, Card, Typography } from '@mui/material'
import { BlogType } from '../../types/types'
import { blogpage, getColors } from '../../styles/blog-list-style';
import { MdOutlineDateRange } from "react-icons/md";

type Props = {
    blog: BlogType;
}

const BlogItem = (props: Props) => {
  return (
    <Card sx={blogpage.card}>
      <Box sx={{...blogpage.cardHeader, bgcolor: getColors()}}>
        <Box sx={blogpage.dateContainer}>
          {/* @ts-ignore*/}
          <MdOutlineDateRange size={25} style={{ marginRight: '10px' }} />
          <Typography fontSize={20} variant='caption'>{new Date(+props.blog.date).toDateString()}</Typography>
        </Box>
        <Typography variant='h4' sx={blogpage.title}>{props.blog.title}</Typography>
      </Box>
      <Box sx={blogpage.cardContent}>
          <Typography variant='body1' sx={blogpage.contentText}>{props.blog.content}</Typography>
      </Box>
    </Card>
  )
}

export default BlogItem
