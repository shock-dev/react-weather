import { useEffect, useState } from 'react';
import Switcher from './components/Switcher';
import ChooseCity from './components/ChooseCity';
import Weather from './components/Weather';
import Parameters from './components/Parameters';
import fillParams from './utils/fillParams';
import UnitsType from './types/units';
import useWhether from './hooks/useWhether';
import convertToFahrenheit from './utils/convertToFahrenheit';

const App = () => {
  const { data, loading, fetchWhetherData } = useWhether();
  const [city, setCity] = useState('Архангельск');
  const [unit, setUnit] = useState(UnitsType.C);
  const temp = data?.main?.temp;

  useEffect(() => {
    (async () => {
      await fetchWhetherData(city);
    })();
  }, []);

  const searchCityHandler = async (cityName) => {
    await fetchWhetherData(cityName);
    setCity(cityName);
  };

  return (
    <div className="container">
      <header className="header">
        <ChooseCity
          city={city}
          onSubmit={searchCityHandler}
        />
        <Switcher
          active={unit}
          toggle={setUnit}
        />
      </header>
      {!loading ? (
        <>
          {data && (
            <Weather
              temp={unit === UnitsType.C ? temp : convertToFahrenheit(temp)}
              desc={data.weather[0].description}
            />
          )}
          {data && <Parameters list={fillParams(data)} />}
        </>
      ) : (
        <div>Загрузка</div>
      )}
    </div>
  );
};

export default App;
