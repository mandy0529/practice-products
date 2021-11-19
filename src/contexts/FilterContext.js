import React, {useContext, useReducer} from 'react';
import {useEffect} from 'react';
import FilterReducer, {initialState} from '../reducers/FilterReducer';
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
import {useGlobalContext} from './AppContext';

const FilterContext = React.createContext();

const FilterProvider = ({children}) => {
  const [state, dispatch] = useReducer(FilterReducer, initialState);
  const {products} = useGlobalContext();

  const setListView = () => {
    dispatch({type: SET_LIST_VIEW});
  };

  const setGridView = () => {
    dispatch({type: SET_GRID_VIEW});
  };

  const updateValue = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === 'category') {
      value = e.target.textContent;
    }

    if (name === 'price') {
      value = Number(value);
    }
    if (name === 'shipping') {
      value = e.target.checked;
    }
    dispatch({type: UPDATE_VALUE, payload: {name, value}});
  };

  const loadProducts = () => {
    dispatch({type: LOAD_PRODUCTS, payload: products});
  };

  const filteredProducts = () => {
    dispatch({type: FILTERED_PRODUCTS});
  };

  const clearFilter = () => {
    console.log('clear');
    dispatch({type: CLEAR_FILTER});
  };

  const updateSort = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    dispatch({type: UPDATE_SORT, payload: value});
  };

  const sortedProducts = () => {
    dispatch({type: SORTED_PRODUCTS});
  };
  useEffect(() => {
    loadProducts();
  }, [products]);

  useEffect(() => {
    filteredProducts();
    sortedProducts();
  }, [state.sort, products, state.filter]);

  return (
    <FilterContext.Provider
      value={{
        ...state,
        updateValue,
        setListView,
        setGridView,
        clearFilter,
        updateSort,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};

export default FilterProvider;
