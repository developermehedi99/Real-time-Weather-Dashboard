import { useContext, useEffect, useState } from "react";
import RemFav from "../../assets/img/heart-red.png";
import AddFav from "../../assets/img/heart.png";
import { FavoritesContext, WeatherContext } from "../../context";

const AddFavorite = () => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useContext(FavoritesContext);
  const { weatherData } = useContext(WeatherContext);

  const [isFavorite, setIsFavorite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFavorite(found);
  }, []);

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorites(latitude, longitude, location);
    } else {
      removeFromFavorites(location);
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          {isFavorite ? (
            <>
              <span>Remove Favorite</span>
              <img src={RemFav} alt="fav" />{" "}
            </>
          ) : (
            <>
              {" "}
              <span>Add to Favourite</span>
              <img src={AddFav} alt="fav" />{" "}
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default AddFavorite;
