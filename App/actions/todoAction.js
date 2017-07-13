import request from 'axios';
const API_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';



export const todoAct = (todo) => {
	return{
		type:"SELECT_TODO",
		payload:request.get(API_URL)
	}
};