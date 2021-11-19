import axios from 'axios';
import React, {useContext, useEffect, useReducer} from 'react';
import AppReducer, {initialState} from '../reducers/AppReducer';
import {
  ERROR,
  GET_DATA,
  HIDE_SIDEBAR,
  SET_LOADING,
  SHOW_SIDEBAR,
} from '../utils/action';
import {products_url} from '../utils/helpers';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const showSidebar = () => {
    dispatch({type: SHOW_SIDEBAR});
  };

  const hideSidebar = () => {
    dispatch({type: HIDE_SIDEBAR});
  };

  const getData = async (url) => {
    dispatch({type: SET_LOADING});
    try {
      const {data} = await axios.get(url);
      dispatch({type: GET_DATA, payload: data});
    } catch (error) {
      dispatch({type: ERROR});
    }
  };

  useEffect(() => {
    getData(products_url);
  }, []);

  return (
    <AppContext.Provider value={{...state, showSidebar, hideSidebar}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
