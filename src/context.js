import React, { useState, useContext } from 'react';
import useFetch from './useFetch';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=6daa4e74`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState('Star Wars');
  const { loading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ loading, error, movies, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
