import { useContext } from "react";
import { FavoritesContext } from "../../context";

const FavLocation = () => {
  const { favorites } = useContext(FavoritesContext);
  return (
    <div>
      <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
        <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {favorites.length > 0 ? (
            favorites.map((fav) => (
              <li key={fav.location} className="hover:bg-gray-200">
                {fav.location}
              </li>
            ))
          ) : (
            <p>nothing is added..</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FavLocation;
