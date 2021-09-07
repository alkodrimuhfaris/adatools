export default {
  changePage: (page = 'pair-explorer') => {
    return {
      type: "CHANGE_TOP_SMALL",
      payload: page,
    };
  },
}