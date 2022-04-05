const videosReducer = (state, action) => {
	switch (action.type) {

	case "SET_VIDEOS_LIST":
		return {
			...state,
			videos: action.payload,
		};

      case "SET_CATEGORY_LIST":
            return {
                  ...state,
                  categories: action.payload,
            };
	default:
		return state;
	}
};

export {videosReducer};