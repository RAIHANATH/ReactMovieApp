import React from 'react'
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography align='left' sx={{flexGrow: 1}}>MOVIE MANAGEMENT APP</Typography>
          <Button><Link to={'/'} style={{color:'white',textDecoration:'none'}}>Home</Link></Button>
          {/*<Button style={{color:'white',textDecoration:'none'}}>Home</Button>*/}
          <Button><Link to={'/AddMovie'} style={{color:'white',textDecoration:'none'}}>Add Movie</Link></Button>
          {/*<Button style={{color:'white',textDecoration:'none'}}>Add Movie</Button>*/}
          <Button style={{color:'white',textDecoration:'none'}}>About Us</Button>
        </Toolbar>
      </AppBar>

    </div>
  )
}

export default Navbar