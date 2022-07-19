export const getProducts = async () => {
  const response = await fetch('http://localhost:3000/products');
  return response.json();
};

export const getProduct = async (pid) => {
  const response = await fetch(`http://localhost:3000/products/${pid}`);
  return response.json();
};
