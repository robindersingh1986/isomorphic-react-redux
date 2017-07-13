import {combineReducers} from "redux";
import todoReducer from "./todoReducer";

export const allReducers = combineReducers({
	todo:todoReducer
});

export default allReducers;