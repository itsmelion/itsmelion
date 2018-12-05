export const yearsFromNow = (y = 2016, m = 0) => {
  let year = parseInt(y, 10);
  const month = parseInt(m, 10);
  if (month >= 6) year += 1;

  return Math.ceil(
    (new Date() - new Date(year, month, 0)) / 1000 / 60 / 60 / 24 / 365,
  );
};

export default yearsFromNow;
