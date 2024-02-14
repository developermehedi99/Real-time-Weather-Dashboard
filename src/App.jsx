import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather-board/WeatherBoard";
import { WeatherProvider } from "./provider";

function App() {
  return (
    <>
      <WeatherProvider>
        <Header></Header>
        <main>
          <WeatherBoard></WeatherBoard>
        </main>
      </WeatherProvider>
    </>
  );
}

export default App;
