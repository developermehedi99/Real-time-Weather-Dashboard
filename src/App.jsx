import "./App.css";
import Header from "./components/header/Header";
import WeatherBoard from "./components/weather-board/WeatherBoard";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <WeatherBoard></WeatherBoard>
      </main>
    </>
  );
}

export default App;
