import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, moveTask } from './redux/taskSlice';
import Header from './components/Header';
import Section from './components/Section';
import { Grid } from '@mui/material';

const App = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (section) => {
    const title = prompt('Enter task title:');
    const description = prompt('Enter task description:');
    const difficulty = prompt('Enter task difficulty:');
    if (title && description && difficulty) {
      dispatch(addTask({ title, description, difficulty}));
    }
  };

  return (
    <>
      <Header />
      <Grid container spacing={2} sx={{ padding: 2 }}>
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
      </Grid>
    </>
  );
};

export default App;
