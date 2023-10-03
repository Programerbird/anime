import React from 'react'
import './Header.css';
import cat from '../Pictures/cat.jpg'
import logo from '../Pictures/logo.png'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import { deepOrange,green} from '@mui/material/colors';
import mainlogo from '../Pictures/mainlogo.png'

const Header = () => {
  return (
    <div className='head_wrapper' >
      <div className='logo'>
        <img     className='anime' src={mainlogo} />
          <div className='my_button' >
        <Button  variant="contained" color="success" >login
        </Button>
        <Button  variant="contained" color="success" >login
        </Button>
        </div>
      </div>

    </div>
    
     
  )
}

export default Header