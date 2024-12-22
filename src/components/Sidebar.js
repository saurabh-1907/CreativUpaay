import React from 'react';
import { Drawer, IconButton, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = ({ open, handleDrawerToggle }) => {
  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="permanent"
      anchor="left"
      open={open}
    >
      <IconButton onClick={handleDrawerToggle} sx={{ display: { xs: 'block', sm: 'none' } }}>
        {open ? <ChevronLeftIcon /> : <MenuIcon />}
      </IconButton>
      <Divider />
      <List>
        <ListItem button key="Home">
          <ListItemIcon>
            {/* Add an icon here based on your needs */}
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button key="Projects">
          <ListItemIcon>
            {/* Add an icon here based on your needs */}
          </ListItemIcon>
          <ListItemText primary="Projects" />
        </ListItem>
        {/* Add more list items as needed */}
      </List>
    </Drawer>
  );
};

export default Sidebar;