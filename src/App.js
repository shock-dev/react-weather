import { useEffect, useState } from 'react';
import WeatherAPI from './api/weather';
import Switcher from './components/Switcher';
import ChooseCity from './components/ChooseCity';
import Weather from './components/Weather';
import Parameters from './components/Parameters';
import fillParams from './utils/fillParams';

const App = () => {
  const [city] = useState('Архангельск');
  const [data, setData] = useState(null);
  const [unit, setUnit] = useState('C');

  useEffect(() => {
    (async () => {
      setData(await WeatherAPI.getByCity(city));
    })();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <ChooseCity city={city} />
        <Switcher
          active={unit}
          toggle={setUnit}
        />
      </header>
      {data && (
        <Weather
          temp={data.main.temp}
          desc={data.weather[0].description}
        />
      )}
      {data && <Parameters list={fillParams(data)} />}
    </div>
  );
};

export default App;
