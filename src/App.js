// App.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './redux/taskSlice';
import Header from './components/Header';
import Section from './components/Section';
import Sidebar from './components/Sidebar';
import { Box, Stack } from '@mui/material';

const App = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (section) => {
    const title = prompt('Enter task title:');
    const description = prompt('Enter task description:');
    const difficulty = prompt('Enter task difficulty (Easy, Medium, Hard):');
    if (title && description && difficulty) {
      dispatch(addTask({ title, description, difficulty, section }));
    }
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <Box sx={{ flexGrow: 1, padding: 4, backgroundColor: '#f8f9fb', overflowY: 'auto' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Mobile App</h1>
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Section
              title="To Do"
              tasks={tasks.toDo}
              onAddTask={() => handleAddTask('toDo')}
            />
            <Section
              title="In Progress"
              tasks={tasks.inProgress}
              onAddTask={() => handleAddTask('inProgress')}
            />
            <Section
              title="Done"
              tasks={tasks.done}
              onAddTask={() => handleAddTask('done')}
            />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
