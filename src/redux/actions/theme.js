export default {
  editTheme: (theme = "dark") => {
    return {
      type: "EDIT_THEME",
      payload: theme,
    };
  },
  toggleTheme: (theme = "dark") => {
    return {
      type: "TOGGLE_THEME",
      payload: theme === "dark" ? "light" : "dark",
    };
  },
};
