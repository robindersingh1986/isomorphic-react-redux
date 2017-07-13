import {combineReducers} from "redux";
import todoReducer from "./todoReducer";


console.log("allReducers called");

const allReducers = combineReducers({
	todo:todoReducer
});

export default allReducers;