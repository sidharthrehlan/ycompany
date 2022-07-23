export const getProducts = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/products`
  );
  return response.json();
};

export const getProduct = async (pid) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_ENDPOINT}/products/${pid}`
  );
  return response.json();
};
