import React from 'react';
import TaskCard from './TaskCard';
import { Button, Typography, Box } from '@mui/material';

const Section = ({ title, tasks, onAddTask }) => (
  <Box
    sx={{
      flex: 1,
      backgroundColor: '#ffffff',
      borderRadius: 2,
      padding: 2,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Typography variant="h6" align="center" fontWeight="bold" sx={{ marginBottom: 2 }}>
      {title}
    </Typography>
    {tasks.map((task, index) => (
      <TaskCard key={index} task={task} />
    ))}
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{ marginTop: 2 }}
      onClick={onAddTask}
    >
      Add Task
    </Button>
  </Box>
);

export default Section;