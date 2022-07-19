export const optionMapper = (options) => {
  return options.map((option) => {
    return {
      label: option,
      value: option,
    };
  });
};
