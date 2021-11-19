import {
  ERROR,
  GET_DATA,
  HIDE_SIDEBAR,
  SET_LOADING,
  SHOW_SIDEBAR,
} from '../utils/action';

export const initialState = {
  onSidebar: false,
  loading: true,
  error: false,
  products: [],
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
    default:
      throw new Error();
  }
};

export default AppReducer;
