import React, { createContext, useContext, useState } from "react";
export const FavoriteContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => false,
});
function FavoriteContextProvider(props) {
  const [ids, setIds] = useState([]);
  const addFavoriteHandler = (id) => {
    setIds((prevIds) => {
      return [...prevIds, id];
    });
  };
  const removeFavoriteHandler = (id) => {
    setIds((prevIds) => {
      return prevIds.filter((itemId) => itemId !== id);
    });
  };
  const isFavoriteHandler = (id) => {
    return ids.includes(id);
  };
  const context = {
    ids,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isFavoriteHandler,
  };
  return <FavoriteContext.Provider value={context} {...props} />;
}
export const useFavorite = () => {
  const context = useContext(FavoriteContext);

  if (!context) {
    throw new Error("useFavorite must be used within a FavoriteProvider");
  }
  return context;
};

export default FavoriteContextProvider;
