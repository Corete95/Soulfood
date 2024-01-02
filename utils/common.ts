export const timeConversion = () => {
  const TIME_ZONE = 9 * 60 * 60 * 1000;
  const day = new Date();

  const date = new Date(day.getTime() + TIME_ZONE).toISOString().split('T')[0];
  const time = day.toTimeString().split(' ')[0].slice(0, -3);

  return `${date} ${time}`;
};
