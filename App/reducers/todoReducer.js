export default (state=null, action) => {
	console.log("action.payload in reducer :  ", action.payload);
	switch(action.type)
	{
		case "GET_TODOS":
			return action.payload;
		break;
		default:
			console.log("default called ", action.payload);
		break;
	}
	return state;
}



