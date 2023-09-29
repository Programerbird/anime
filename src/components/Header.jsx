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
      <div className='main' >
        <div className='mainlogo' >
          <img className='logo' src={mainlogo} alt='mainlogopic'/>
            <div className='mainbutton' >
            <div className='button' >
            <Button  variant="contained" color="success" >login
            </Button>
            <Button variant="contained" color="success" className='button__name'>Sign up
            </Button>
            </div>
            </div>
          
         
            
        </div>
      </div>
    </div>
    
     
  )
}

export default Header