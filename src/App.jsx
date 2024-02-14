import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather-board/WeatherBoard";
import {
  FavoriteProvider,
  LocationProvider,
  WeatherProvider,
} from "./provider";

function App() {
  return (
    <>
      <WeatherProvider>
        <FavoriteProvider>
          <LocationProvider>
            <Header></Header>
            <main>
              <WeatherBoard></WeatherBoard>
            </main>
          </LocationProvider>
        </FavoriteProvider>
      </WeatherProvider>
    </>
  );
}

export default App;
