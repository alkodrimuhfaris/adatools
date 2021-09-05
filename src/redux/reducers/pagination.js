const initialState = {
  liveFairPage: 1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    default: {
      return state;
    }
    case "LIVE_PAIRS_PAGINATION": {
      return {
        ...state,
        liveFairPage: action.payload,
      };
    }
  }
};
