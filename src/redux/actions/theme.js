export default {
  editTheme: (theme = "light") => {
    localStorage.setItem("theme", theme);
    return {
      type: "EDIT_THEME",
      payload: theme,
    };
  },
  toggleTheme: (theme = "light") => {
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
    return {
      type: "EDIT_THEME",
      payload: theme === "dark" ? "light" : "dark",
    };
  },
};
