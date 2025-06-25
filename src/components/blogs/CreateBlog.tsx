import { useMutation } from '@apollo/client';
import { Box, Button, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'
import { CREATE_BLOG } from '../graphql/mutation';

const createBlogStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '95vw',
  alignItems: 'center',
  gap: '20px',
  m: 3
};

const CreateBlog = () => {
    const [title, setTitle] = useState<string>('')
    const [content, setContent] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const [createBlog, {loading, error, data}] = useMutation(CREATE_BLOG)

    const handleBlogSubmit = async () => {

      const User = localStorage.getItem('user') as string;
  
      if (User) {
        let { id } = JSON.parse(User) as any;
        try {
          const submitBlog = await createBlog({
            variables: {
              title,
              content,
              date,
              user: id,
            },
          });
          console.log(submitBlog)
        } catch (err) {
          console.log(err)
        }
      }
    }

  return (
    <Box sx={createBlogStyle}>
      <TextField variant='outlined' placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
      <TextareaAutosize
        value={content}
        onChange={(e) => setContent(e.target.value)} // Fixed: setContent instead of setTitle
        placeholder="Your Content"
        style={{
          width: '60%',
          minHeight: '100px',
          margin: '10px 0',
          padding: '10px',
          borderRadius: '5px',
          border: '1px solid #ccc',
        }}
      />
      <TextField variant='outlined' placeholder='Date - (YYYY-MMM-DD)' value={date} onChange={(e)=>setDate(e.target.value)} />
      <Button sx={{mb:2, mt:1}} variant='contained' onClick={handleBlogSubmit}>Submit Blog</Button>
    </Box>
  )
}

export default CreateBlog
