export const ageFormatter = (num) => {
  const formatter = new Intl.NumberFormat('ru', {
    style: 'unit',
    unit: 'year',
    unitDisplay: 'long',
  });

  return formatter.format(num);
};
