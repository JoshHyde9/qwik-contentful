export const changeTheme = () => {
  const hours = new Date().getHours();
  return hours > 18 ? "dark" : "light";
};
