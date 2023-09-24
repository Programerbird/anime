import React from 'react'
import './Header.css';
import cat from '../Pictures/cat.jpg'
import logo from '../Pictures/logo.png'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange,green} from '@mui/material/colors';


const Header = () => {
  return (
      <div className='head_wrapper'>
        <div className='head_main' >
          <div className='title' >
            ANIMEINU
          </div>
          <div className='search' >
             <input type="text" placeholder="Search" />
        </div>
        <div className="button">
          {/* <Avatar alt="Remy Sharp" src={cat} /> */}
          <Button variant="contained" color="success">Sign in</Button>
          <Button variant="contained" color="success">Sign up</Button>
          <Button variant="contained" color="success">Get App</Button>
        </div>
        </div>
      </div>
  )
}

export default Header