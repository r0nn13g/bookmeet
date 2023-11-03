import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
          ÷
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none'  }} >
            <Link to="/" style={{textDecoration: 'none' , color: 'black' }}>
              <b> + Home</b>
            </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none'  }} >
            <Link to="/bookings" style={{ textDecoration: 'none' , color: 'black' }}>
              <b> + Bookings</b>
            </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none'  }} >
            <Link to="/book" style={{ textDecoration: 'none' , color: 'black' }}>
              <b> + Book</b>
            </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' }} >
              <Link to="/meeting-rooms" style={{ textDecoration: 'none' , color: 'black' }}>
              <b> + Meeting Rooms</b>
              </Link>
          </ListItem>
          <ListItem style={{ display: 'flex', justifyContent: 'flex-end', textDecoration: 'none' }} >
              <Link to="/new-room" style={{ textDecoration: 'none' , color: 'black' }}>
              <b> + Create New Meeting Room</b>
              </Link>
          </ListItem>
      </List>
      <ListItem style={{ display: 'flex', justifyContent: 'flex-end' }} >
          <a href="https://www.github.com/r0nn13g" style={{ textDecoration: 'none' , color: 'black'}}>
            <h5>Bookmeet - Created by Ronnie Garcia</h5>
          </a>
            &nbsp; &nbsp;&nbsp;
              <GitHubIcon style={{fill: 'black'}}/>
      </ListItem>
    </Box>
  );
  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button id="nav-drawer-button" onClick={toggleDrawer(anchor, true)}> 
            <MenuIcon id="menu-icon" style={{ color: 'black' }} />
          </Button>
          <Drawer
            PaperProps={{
            sx: {
            
              margin: '0px',
            }
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onClick={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}