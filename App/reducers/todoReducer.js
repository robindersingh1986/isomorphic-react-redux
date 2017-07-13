export default (state=null, action) => {
	switch(action.type)
	{
		case "SELECT_TODO":
			return action.payload;
		break;
		default:
			console.log("default called")
		break;
	}
	return state;
}



