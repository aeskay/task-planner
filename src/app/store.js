import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/task/taskSlice';
import {logger} from 'redux-logger'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [logger],
}); 

