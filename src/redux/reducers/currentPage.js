const initialState = {
  page: "standard",
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return {
        ...state,
      };
    }
    case "CHANGE_TOP_SMALL": {
      return {
        ...state,
        page: action.payload,
      };
    }
  }
};
