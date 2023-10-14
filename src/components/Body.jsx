import React from 'react'
import './Body.css';
import mainlogo from '../Pictures/mainlogo.png'
import pic1 from '../Pictures/pic1.jpg'
import pic2 from '../Pictures/pic2.jpg'
import pic3 from '../Pictures/pic3.jpg'
import pic4 from '../Pictures/pic4.jpg'
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SearchIcon from '@mui/icons-material/Search';




function Body() {
  return (
    <div>
      <div className='main_wrapper' >
        <img className='bk_pic' src={mainlogo}  img/>
        <h1>Login</h1>
          <div className='placeholders' >
            <input  type='text' placeholder='Email'input/>
            <input type='password' placeholder='Password'input/>
          </div>
            <div className='buttons' >
              <Button variant="contained" color="success">
                Login
              </Button>
                <a className='link_1' href="url">Forgot Password? </a>
              </div>
                <div className='sign_up' >
                 <h4>Don't have an account?</h4>
                 <a className='link_2'  href='url'>Sign up</a>
                </div>
      </div>
    </div>

  
  )
}

export default Body