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
  }
};
