import { FavoritesContext } from "../context";
import { useLocalStorage } from "../hooks";

// eslint-disable-next-line react/prop-types
const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (latitude, longitude, location) => {
    setFavorites([
      ...favorites,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const removeFromFavorites = (location) => {
    const restFavorites = favorites.filter((fav) => fav.location !== location);
    setFavorites(restFavorites);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteProvider;
