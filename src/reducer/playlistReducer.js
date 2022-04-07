const playlistReducer = (state, action) => {

	switch (action.type) {

            case "GET_PLAYLISTS":
                  return {
                        ...state,
                        playlistsItems: action.payload,
                  };
            case "CREATE_PLAYLIST":
                  return {
                        ...state,
                        playlistsItems: action.payload,
                  };
            case "DELETE_PLAYLIST":
                  return {
                        ...state,
                        playlistsItems: action.payload,
                  };
            case "ADD_VIDEO_TO_PLAYLIST":
                  return {
                        ...state,
                        playlistsItems: state.playlistsItems.map((playlist) => playlist._id === action.payload._id ? action.payload : playlist) 
                  };
            case "DELETE_VIDEO_FROM_PLAYLIST":
                  return {
                        ...state,
                        playlistsItems: state.playlistsItems.map((playlist) => playlist._id === action.payload._id ? action.payload : playlist)
                  };
		default:
			return state;
	}
};

export {playlistReducer};