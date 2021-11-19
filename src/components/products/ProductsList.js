import React from 'react';
import {GridView, ListView} from '..';
import {useFilterContext} from '../../contexts/FilterContext';

const ProductList = () => {
  const {filtered_products: products, grid_view} = useFilterContext();
  if (products.length < 1) {
    return <h5>sorry not found any products...</h5>;
  }
  if (grid_view === false) {
    return <ListView products={products} />;
  }
  return <GridView products={products}>product list</GridView>;
};

export default ProductList;
