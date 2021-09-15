import { useEffect, useState } from 'react';

import Switcher from './components/Switcher';
import ChooseCity from './components/ChooseCity';
import Weather from './components/Weather';
import Parameters from './components/Parameters';
import Loader from './components/Loader';
import Error from './components/Error';

import fillParams from './utils/fillParams';
import UnitsType from './types/units';
import useWhether from './hooks/useWhether';
import convertToFahrenheit from './utils/convertToFahrenheit';

const App = () => {
  const {
    data,
    loading,
    error,
    setError,
    fetchWhetherData
  } = useWhether();
  const [city, setCity] = useState('Архангельск');
  const [unit, setUnit] = useState(UnitsType.C);
  const t = data?.main?.temp;

  useEffect(() => {
    (async () => {
      await fetchWhetherData(city);
    })();
  }, []);

  const searchCityHandler = async (cityName) => {
    if (error) setError(false);
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
      {error && !loading && (
        <Error
          error={error}
          onTryAgain={() => searchCityHandler(city)}
        />
      )}

      {!error && loading && (
        <Loader />
      )}

      {!error && !loading && (
        <>
          {data && (
            <Weather
              temp={unit === UnitsType.C ? t : convertToFahrenheit(t)}
              desc={data.weather[0].description}
              icon={data.weather[0].main}
            />
          )}
          {data && <Parameters list={fillParams(data)} />}
        </>
      )}
    </div>
  );
};

export default App;
