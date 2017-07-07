import {combineReducers} from "redux";
import usersReducer from "./users";
import couponsReducer from "./coupons";

const allReducers = combineReducers({
	users:usersReducer,
	coupons:couponReducer
})