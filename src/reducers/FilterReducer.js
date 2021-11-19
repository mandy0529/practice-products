import {
  CLEAR_FILTER,
  FILTERED_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRID_VIEW,
  SET_LIST_VIEW,
  SORTED_PRODUCTS,
  UPDATE_SORT,
  UPDATE_VALUE,
} from '../utils/action';

export const initialState = {
  grid_view: true,
  product: [],
  filtered_products: [],
  sort: 'price-lowest',
  filter: {
    query: '',
    category: 'all',
    company: 'all',
    colors: 'all',
    price: 0,
    min_price: 0,
    max_price: 0,
    shipping: false,
  },
};

const FilterReducer = (state, action) => {
  switch (action.type) {
    case SET_LIST_VIEW: {
      return {...state, grid_view: false};
    }

    case SET_GRID_VIEW: {
      return {...state, grid_view: true};
    }

    case LOAD_PRODUCTS:
      let max_price = action.payload.map((item) => {
        return item.price;
      });
      max_price = Math.max(...max_price);

      return {
        ...state,
        products: [...action.payload],
        filtered_products: [...action.payload],
        filter: {...state.filter, max_price, price: max_price},
      };

    case UPDATE_VALUE:
      const {name, value} = action.payload;
      return {...state, filter: {...state.filter, [name]: value}};

    case FILTERED_PRODUCTS:
      const {
        products,
        filter: {query, category, company, colors, price, shipping},
      } = state;
      let filteredProducts = [...products];

      if (query) {
        filteredProducts = filteredProducts.filter((item) =>
          item.name.includes(query)
        );
      }
      if (category !== 'all') {
        filteredProducts = filteredProducts.filter(
          (item) => item.category === category
        );
      }
      if (company !== 'all') {
        filteredProducts = filteredProducts.filter(
          (item) => item.company === company
        );
      }
      if (colors !== 'all') {
        filteredProducts = filteredProducts.filter((item) => {
          return item.colors.find((item) => item === colors);
        });
      }
      if (shipping) {
        filteredProducts = filteredProducts.filter((item) => {
          return item.shipping === true;
        });
      }
      filteredProducts = filteredProducts.filter((item) => item.price <= price);

      return {...state, filtered_products: filteredProducts};

    case CLEAR_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          query: '',
          category: 'all',
          company: 'all',
          colors: 'all',
          price: state.filter.max_price,
          shipping: false,
        },
      };

    case UPDATE_SORT:
      return {...state, sort: action.payload};

    case SORTED_PRODUCTS:
      const {filtered_products, sort} = state;
      let sorted_products = [...filtered_products];
      if (sort === 'price-lowest') {
        sorted_products.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sort === 'price-highest') {
        sorted_products.sort((a, b) => {
          return b.price - a.price;
        });
      }
      if (sort === 'name-a') {
        sorted_products.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (sort === 'name-z') {
        sorted_products.sort((a, b) => {
          return b.name.localeCompare(a.name);
        });
      }
      return {...state, filtered_products: sorted_products};
    default:
      throw new Error();
  }
};

export default FilterReducer;
