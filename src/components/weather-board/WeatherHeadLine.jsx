import moment from "moment";
import { useContext } from "react";
import pin from "../../assets/img/pin.png";
import { WeatherContext } from "../../context";

import sunnyIcon from "../../assets/icons/sunny.svg";
import cloudIcon from "../../assets/img/cloud.png";
import snowIcon from "../../assets/img/haze.png";
import rainIcon from "../../assets/img/rainy.png";
import sunIcon from "../../assets/img/sun.png";
import thunderIcon from "../../assets/img/thunder.png";

const WeatherHeadLine = () => {
  const { weatherData } = useContext(WeatherContext);
  const { temperature, location, climate } = weatherData;

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return rainIcon;
      case "Clouds":
        return cloudIcon;
      case "Clear":
        return sunnyIcon;
      case "Thunder":
        return thunderIcon;
      case "Snow":
        return snowIcon;
      case "Haze":
        return snowIcon;
      case "Sun":
        return sunIcon;
      default:
        return sunnyIcon;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {moment().format("h:mm:ss a, dddd, MMMM Do YYYY, ")}
      </p>
    </div>
  );
};

export default WeatherHeadLine;
