import request from 'axios';

console.log("Action called");

const API_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=1';
//call api here
let data = [1,2,3];
/*try
{
data = request.get(API_URL);
console.log("data : ", data)
}
catch(err){
	console.log("error : ", err);
}*/


export function todoAct() {
  return {
    type:    'GET_TODOS',
    promise: data
  }
}

/*export const todoAct = (todo) => {
	return{
		type:"SELECT_TODO",
		payload:data
	}
};*/