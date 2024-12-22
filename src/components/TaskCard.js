import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TaskCard = ({ task }) => (
  <Card
    variant="outlined"
    sx={{
      marginBottom: 2,
      borderRadius: 2,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.2s, box-shadow 0.2s',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)',
      },
    }}
  >
    <CardContent sx={{ padding: '16px 24px', position: 'relative' }}>
      {/* Priority Badge */}
      <Chip
        label={task.priority}
        size="small"
        sx={{
          position: 'absolute',
          top: 16,
          left: 16,
          fontWeight: 'bold',
          backgroundColor: task.priority === 'High' ? '#FF6961' : '#FFECB3',
          color: task.priority === 'High' ? '#fff' : '#000',
        }}
      />

      {/* Options Menu */}
      <IconButton
        size="small"
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          color: 'text.secondary',
        }}
      >
        <MoreVertIcon />
      </IconButton>

      {/* Task Title */}
      <Typography variant="h6" fontWeight="bold" gutterBottom>
        {task.title}
      </Typography>

      {/* Task Description */}
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {task.description}
      </Typography>

      {/* Comments Section */}
      <Stack direction="row" spacing={1} alignItems="center" mt={2}>
        <Typography variant="body2" color="text.secondary">
          {task.comments} comments
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);

export default TaskCard;
