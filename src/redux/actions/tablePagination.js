export default {
  livePairs: (page = 1) => {
    return {
      type: "LIVE_PAIRS_PAGINATION",
      payload: page,
    };
  },
  livePairsOrderBy: (orderBy = 1) => {
    return {
      type: "LIVE_PAIRS_ORDER_BY",
      payload: orderBy,
    };
  },
  livePairsOrderIn: (orderIn = 'asc') => {
    return {
      type: "LIVE_PAIRS_ORDER_IN",
      payload: orderIn,
    };
  },
  pairExplorer: (page = 1) => {
    return {
      type: "PAIR_EXPLORER_PAGINATION",
      payload: page,
    };
  },
  pairExplorerBy: (orderBy = 1) => {
    return {
      type: "PAIR_EXPLORER_ORDER_BY",
      payload: orderBy,
    };
  },
  pairExplorerOrderIn: (orderIn = 'asc') => {
    return {
      type: "PAIR_EXPLORER_ORDER_IN",
      payload: orderIn,
    };
  },
};
