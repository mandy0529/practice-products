const products_url = 'https://course-api.com/react-store-products';

const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const navLinks = [
  {id: 1, path: '/', title: 'home'},
  {id: 2, path: '/products', title: 'products'},
  {id: 3, path: '/cart', title: 'cart'},
];

const getUniqueValue = (data, type) => {
  let uniqueValue = data && data.map((item) => item[type]);
  if (type === 'colors') {
    uniqueValue = uniqueValue && uniqueValue.flat();
  }
  uniqueValue = ['all', ...new Set(uniqueValue)];
  return uniqueValue;
};

const formatPrice = (number) => {
  const newNumber = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100);
  return newNumber;
};

export {
  products_url,
  single_product_url,
  navLinks,
  getUniqueValue,
  formatPrice,
};
