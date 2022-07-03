const historyReducer = (state, action) => {
    switch (action.type) {
        case "SET_HISTORY_LIST":
            return {
                ...state,
                historyItems: action.payload,
            };
        default:
            return state;
    }
};

export { historyReducer };