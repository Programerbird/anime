import React from 'react'
import './Header.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange,green} from '@mui/material/colors';
import AvatarGroup from '@mui/material/AvatarGroup';
import AbcIcon from '@mui/icons-material/Abc';
import AccessibleIcon from '@mui/icons-material/Accessible';

const Header = () => {
  return (
    <div>
      <div className='wrapper_header' >
        <div className='header_main_box' >
        <Avatar sx={{ bgcolor: green[500] }} variant="square">
          A
        </Avatar> 
          
        </div>
      </div>
    </div>
  )
}

export default Header