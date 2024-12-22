import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {
    toDo: [],
    inProgress: [],
    done: [],
  },
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.toDo.push(action.payload);
    },
    moveTask: (state, action) => {
      const { from, to, taskIndex } = action.payload;
      const [movedTask] = state.tasks[from].splice(taskIndex, 1);
      state.tasks[to].push(movedTask);
    },
  },
});

export const { addTask, moveTask } = taskSlice.actions;
export default taskSlice.reducer;
