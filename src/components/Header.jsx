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
          <div className='avatar' >
           <Avatar sx={{ bgcolor: green[500] }} variant="square">
             A
           </Avatar> 
           <div className='search' >
           <input  type='text' placeholder="SEARCH"/>
           </div>
             
          </div>
       </div>
       <div>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
       </div>
     </div>
    </div>
  )
}

export default Header