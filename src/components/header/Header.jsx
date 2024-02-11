import Logo from "../../assets/img/logo.png";
import FavLocation from "./FavLocation";
import Favorite from "./Favorite";
import Search from "./Search";
const Header = () => {
  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <img src={Logo} alt="logo" />

        <div className="flex items-center gap-4 relative">
          <Search></Search>
          <Favorite></Favorite>
          <FavLocation></FavLocation>
        </div>
      </nav>
    </header>
  );
};

export default Header;
