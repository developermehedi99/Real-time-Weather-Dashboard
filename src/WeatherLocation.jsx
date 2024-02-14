import { useContext } from "react";
import Img4 from "../src/assets/icons/cloud.svg";
import Img3 from "../src/assets/icons/humidity.svg";
import Img2 from "../src/assets/icons/temp-max.svg";
import Img1 from "../src/assets/icons/temp-min.svg";
import Img5 from "../src/assets/icons/wind.svg";
import { WeatherContext } from "./context";

const WeatherLocation = () => {
  const { weatherData } = useContext(WeatherContext);
  const {
    maxTemperature,
    climate,
    minTemperature,
    humidity,
    cloudPercentage,
    wind,
  } = weatherData;
  return (
    <div>
      <p className="text-sm lg:text-lg font-bold uppercase mb-8">
        The climate is <u>{climate}</u>
      </p>
      <ul className="space-y-6 lg:space-y-6">
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp max</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(maxTemperature)}°</p>
            <img src={Img2} alt="team" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Temp min</span>
          <div className="inline-flex space-x-4">
            <p>{Math.round(minTemperature)}°</p>
            <img src={Img1} alt="team" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Humadity</span>
          <div className="inline-flex space-x-4">
            <p>{humidity}%</p>
            <img src={Img3} alt="humadity" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Cloudy</span>
          <div className="inline-flex space-x-4">
            <p>{cloudPercentage}%</p>
            <img src={Img4} alt="cloudy" />
          </div>
        </li>
        <li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
          <span>Wind</span>
          <div className="inline-flex space-x-4">
            <p>{wind}km/h</p>
            <img src={Img5} alt="wind" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default WeatherLocation;
