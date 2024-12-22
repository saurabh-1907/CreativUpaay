import React from 'react';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';

const Sidebar = () => (
  <Box
    sx={{
      width: 250,
      backgroundColor: '#f4f4f4',
      boxShadow: '2px 0 8px rgba(0, 0, 0, 0.1)',
      padding: 2,
      position: 'fixed',
      top: '64px',
      left: 0,
      bottom: 0,
    }}
  >
    <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>
      Menu
    </Typography>
    <List>
      <ListItem button>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Tasks" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Analytics" />
      </ListItem>
      <Divider sx={{ marginY: 2 }} />
      <ListItem button>
        <ListItemText primary="Settings" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Logout" />
      </ListItem>
    </List>
  </Box>
);

export default Sidebar;