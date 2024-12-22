import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from './redux/taskSlice';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import MobileAppSection from './components/MobileAppSection';

const App = () => {
  // Retrieve tasks from the Redux store
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  // Function to handle adding a new task to a section
  const handleAddTask = (section) => {
    const title = prompt('Enter task title:');
    const description = prompt('Enter task description:');
    const difficulty = prompt('Enter task difficulty (Easy, Medium, Hard):');
    
    // If all fields are filled, dispatch the addTask action
    if (title && description && difficulty) {
      dispatch(addTask({ title, description, difficulty, section }));
    }
  };

  return (
    <div className="flex">
      {/* Sidebar component for navigation */}
      <Sidebar />
      
      <div className="ml-64 flex-1">
        {/* Header component at the top of the page */}
        <Header />
        
        <main className="p-8 pt-20">
          {/* Mobile app section for responsive design or content */}
          <MobileAppSection />
          
          <div className="mt-8">
            {/* Task management sections */}
            <div className="flex gap-4">
              {/* Section for "To Do" tasks */}
              <Section
                title="To Do"
                tasks={tasks.toDo}
                onAddTask={() => handleAddTask('toDo')}
              />
              {/* Section for "In Progress" tasks */}
              <Section
                title="In Progress"
                tasks={tasks.inProgress}
                onAddTask={() => handleAddTask('inProgress')}
              />
              {/* Section for "Done" tasks */}
              <Section
                title="Done"
                tasks={tasks.done}
                onAddTask={() => handleAddTask('done')}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
