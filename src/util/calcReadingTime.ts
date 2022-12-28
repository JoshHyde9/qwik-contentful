export const calcReadingTime = (content: string) => {
  const wpm = 225;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
};
