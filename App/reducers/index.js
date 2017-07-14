import {combineReducers} from "redux";
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'


import todoReducer from "./todoReducer";


console.log("allReducers called");

const allReducers = combineReducers({
	todo:todoReducer,
	routing: routerReducer
});

export default allReducers;