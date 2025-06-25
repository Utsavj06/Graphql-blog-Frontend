import { useQuery } from '@apollo/client'
import { Box, Typography } from '@mui/material'
import { GET_BLOGS } from '../graphql/queries'
import { useEffect, useState } from 'react'
import BlogItem from '../blogs/BlogItem'
import { BlogType } from '../../types/types'
import { blogpage } from '../../styles/blog-list-style'

const MyProfile = () => {
  const {loading, data, error} = useQuery(GET_BLOGS)
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState()
  const [userBlogs, setUserBlogs] = useState([]);

    useEffect(() => {
      const User = localStorage.getItem('user') as string;
  
      if (User) {
        const { id, name } = JSON.parse(User) as any;
        setUserName(name);
        setUserId(id);
      }
    }, []);
  
    useEffect(() => {
      if (data && userId) {
        const userBlog = data.blogs.filter((blog: any) => blog.user.id === userId);
        setUserBlogs(userBlog);
      }
    }, [data, userId]);
  

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error.....</p>

  return (
    <Box>
      <Typography variant='h3' sx={{ml:3}}>{'hi  ' + userName}</Typography>
      <Typography variant='h6' sx={{ml:3}}>Your Blogs</Typography>
      <Box sx={blogpage.container}>
      {userBlogs.map((blog: BlogType) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
      </Box>
    </Box>
  )
}

export default MyProfile
