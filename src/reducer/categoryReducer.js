const categoryReducer = (state, action) => {
      switch (action.type) {

      case "SET_CATEGORY":
            return {
                  ...state,
                  categoryName: action.payload,
            };

      default:
            return state;
      }
};

export {categoryReducer};