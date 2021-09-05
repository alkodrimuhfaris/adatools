const initialState = {
  liveFairPage: 1,
  liveFairOrderBy: 0,
  liveFairOrderIn: 'asc',
  pairExplorerPage: 1,
  pairExplorerBy: 0,
  pairExplorerIn: 'asc',
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
    case "LIVE_PAIRS_ORDER_BY": {
      return {
        ...state,
        liveFairOrderBy: action.payload,
      };
    }
    case "LIVE_PAIRS_ORDER_IN": {
      return {
        ...state,
        liveFairOrderIn: action.payload,
      };
    }
    case "PAIR_EXPLORER_PAGINATION": {
      return {
        ...state,
        pairExplorerPage: action.payload,
      };
    }
    case "PAIR_EXPLORER_ORDER_BY": {
      return {
        ...state,
        pairExplorerBy: action.payload,
      };
    }
    case "PAIR_EXPLORER_ORDER_IN": {
      return {
        ...state,
        pairExplorerIn: action.payload,
      };
    }
  }
};
