export const changeTheme = () => {
  const hours = new Date().getHours();
  return hours > 18 && hours < 7 ? "dark" : "light";
};
