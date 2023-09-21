import React from 'react'
import './Header.css';
import Avatar from '@mui/material/Avatar';
import { deepOrange} from '@mui/material/colors';
import AvatarGroup from '@mui/material/AvatarGroup';
import AbcIcon from '@mui/icons-material/Abc';
import AccessibleIcon from '@mui/icons-material/Accessible';

const Header = () => {
  return (
    <div>
      <div className='wrapper_header' >
        <div className='header_main_box' >
        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
          A
        </Avatar> 
          
        </div>
      </div>
    </div>
  )
}

export default Header