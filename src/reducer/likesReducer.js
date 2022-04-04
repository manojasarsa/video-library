const likesReducer = (state, action) => {
	switch (action.type) {
	case "SET_LIKED_LIST":
		return {
			...state,
			likedItems: action.payload,
		};
		default:
			return state;
	}
};

export {likesReducer};