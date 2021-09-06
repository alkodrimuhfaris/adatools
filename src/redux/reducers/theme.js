const initialState = {
  theme: 'dark',
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case "EDIT_THEME": {
      return {
        ...state,
        theme: action.payload,
      };
    }
    case "TOGGLE_THEME": {
      const theme = state.theme === 'dark' ? 'light' : 'dark'
      return {
        ...state,
        theme,
      };
    }
  }
};
