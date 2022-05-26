// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const enhanceProduct = (productResponse: Array<any>) => {
  if (Object.keys(productResponse).length === 0) return [];

  let products = [];
  if (Array.isArray(productResponse)) {
    products = productResponse.filter(item => Object.keys(item).length !== 0);
  }

  const enhancedProductResponse = products.map((product) => ({
    ...product,
    name: product.name,
    coverImage: product.cover.url,
    regularPrice: product.regular_price_amount,
    discountPrice: product.price_amount
  }));

  return enhancedProductResponse;
};

export default enhanceProduct;
