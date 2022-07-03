const watchLaterReducer = (state, action) => {
    switch (action.type) {
        case "SET_WATCHLATER_LIST":
            return {
                ...state,
                watchLaterItems: action.payload,
            };
        default:
            return state;
    }
};

export { watchLaterReducer };