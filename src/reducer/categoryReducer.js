const categoryReducer = (state, action) => {
    switch (action.type) {

        case "SET_CATEGORY":
            return {
                ...state,
                categoryName: action.payload,
            };

        case "SET_SEARCH_QUERY":
            return {
                ...state,
                searchQuery: action.payload,
            };

        default:
            return state;
    }
};

export { categoryReducer };