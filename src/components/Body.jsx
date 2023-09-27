import React from 'react'
import './Body.css';
import pic1 from '../Pictures/pic1.jpg'
import pic2 from '../Pictures/pic2.jpg'
import pic3 from '../Pictures/pic3.jpg'
import pic4 from '../Pictures/pic4.jpg'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
function Body() {
  return (
    <div className='body_wrapper' >
        <div className='body_main' >
          <div className='main_buttons' >
            <div className='buttons' >
              <Stack direction="row" spacing={15}>
              <Button variant="contained" >Anime</Button>
              <Button variant="contained" >Manga</Button>
              <Button variant="contained" >Chat</Button>
              </Stack>
            </div>
          
          </div>
          
        </div>
    </div>
  )
}

export default Body