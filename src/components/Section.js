import React from 'react';
import TaskCard from './TaskCard';
import { Button, Typography, Box } from '@mui/material';

const Section = ({ title, tasks, onAddTask }) => (
  <Box
    sx={{
      width: { xs: '100%', md: '30%' },
      padding: 2,
      backgroundColor: '#ffffff',
      borderRadius: 3,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      marginBottom: { xs: 2, md: 0 },
    }}
  >
    <Typography
      variant="h6"
      align="center"
      fontWeight="bold"
      sx={{ marginBottom: 2 }}
    >
      {title}
    </Typography>
    {tasks.map((task, index) => (
      <TaskCard key={index} task={task} />
    ))}
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ marginTop: 2, borderRadius: 2 }}
      onClick={onAddTask}
    >
      Add Task
    </Button>
  </Box>
);

export default Section;
