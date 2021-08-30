export default {
  editTheme: (theme = 'light') => ({
    type: 'EDIT_THEME',
    payload: theme,
  }),
  toggleTheme: (theme = 'light') => ({
    type: 'EDIT_THEME',
    payload: theme === "dark" ? "light" : "dark",
  }),
};
