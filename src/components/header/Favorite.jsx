import favorite from "../../assets/img/heart-red.png";
const Favorite = () => {
  return (
    <div>
      <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={favorite} alt="fav" />
        <span>Favourite Locations</span>
      </div>
    </div>
  );
};

export default Favorite;
