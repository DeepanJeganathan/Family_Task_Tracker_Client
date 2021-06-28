import { applyMiddleware,createStore } from "redux";
import tasksReducer from './tasks/tasksReducer';
import thunk from "redux-thunk";


const store =createStore(tasksReducer, applyMiddleware(thunk));
export default store;