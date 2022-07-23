export const optionMapper = (options) => {
  return options.map((option) => {
    return {
      label: option,
      value: option,
    };
  });
};

export const searchProductBy = (list, searchBy, key) => {
  if (list.length === 0) return;

  const regex = new RegExp(`${key}`, 'ig');

  return list.filter((item) => {
    return regex.test(item[searchBy]);
  });
};
