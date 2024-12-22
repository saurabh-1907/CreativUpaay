import React from 'react';
import { Card, CardContent, Typography, LinearProgress, Box } from '@mui/material';

const TaskCard = ({ task }) => (
  <Card
    variant="outlined"
    sx={{
      marginBottom: 2,
      borderRadius: 2,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    }}
  >
    <CardContent>
      <Typography variant="h6" fontWeight="bold">
        {task.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {task.description}
      </Typography>
      <Box sx={{ marginTop: 1 }}>
        <Typography variant="caption" color="text.secondary">
          Difficulty: {task.difficulty}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={task.difficulty === 'Easy' ? 33 : task.difficulty === 'Medium' ? 66 : 100}
          sx={{
            height: 8,
            borderRadius: 2,
            backgroundColor: '#e0e0e0',
            '& .MuiLinearProgress-bar': {
              backgroundColor:
                task.difficulty === 'Easy' ? '#81C784' : task.difficulty === 'Medium' ? '#FFD54F' : '#E57373',
            },
          }}
        />
      </Box>
    </CardContent>
  </Card>
);

export default TaskCard;