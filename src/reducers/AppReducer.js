import {
  ERROR,
  GET_DATA,
  GET_SINGLE_PRODUCT,
  HIDE_SIDEBAR,
  SET_LOADING,
  SHOW_SIDEBAR,
  SINGLE_PRODUCT_ERROR,
  SINGLE_PRODUCT_LOADING,
} from '../utils/action';

export const initialState = {
  onSidebar: false,
  loading: true,
  error: false,
  products: [],
  single_products: [],
  single_loading: true,
  single_error: false,
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case SHOW_SIDEBAR:
      return {...state, onSidebar: true};

    case HIDE_SIDEBAR:
      return {...state, onSidebar: false};

    case SET_LOADING:
      return {...state, loading: true};

    case ERROR:
      return {...state, error: true};

    case GET_DATA:
      return {...state, products: action.payload};

    case SINGLE_PRODUCT_LOADING:
      return {...state, single_loading: true};

    case SINGLE_PRODUCT_ERROR:
      return {...state, single_error: true};

    case GET_SINGLE_PRODUCT:
      return {...state, single_products: action.payload};
    default:
      throw new Error();
  }
};

export default AppReducer;
