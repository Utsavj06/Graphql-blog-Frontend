import React from 'react'
import { BlogType } from '../../types/types'
import { Box } from '@mui/material'
import { blogpage } from '../../styles/blog-list-style'
import BlogItem from './BlogItem'

type Props = {
  blogs: BlogType[]
}

const BlogList = (props: Props) => {
  console.log(props.blogs)
  return (
   <Box sx={blogpage.container}>
    {props.blogs.map((blog: BlogType) => (
      <BlogItem key={blog.id} blog={blog} />
    ))}
   </Box>
  )
}

export default BlogList
