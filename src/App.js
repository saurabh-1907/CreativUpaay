import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './redux/taskSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section from './components/Section';

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
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <div className="ml-64 flex-1">
        <Header />
        <main className="p-8">
          <h1 className="text-2xl font-bold mb-6">Mobile App</h1>
          <div className="flex gap-4">
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
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
