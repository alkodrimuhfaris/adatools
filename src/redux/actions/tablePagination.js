export default {
  livePairs: (page = 1) => {
    return {
      type: "LIVE_PAIRS_PAGINATION",
      payload: page,
    };
  },
};
