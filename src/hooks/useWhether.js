import { useState } from 'react';
import WeatherAPI from '../api/weather';

const useWhether = () => {
  const [data, setData] = useState(null);
  const [city, setCity] = useState('Архангельск');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchWhetherData = async (cityTitle) => {
    try {
      if (error) setError(false);
      setCity(cityTitle);
      setLoading(true);
      setData(await WeatherAPI.getByCity(cityTitle));
    } catch (e) {
      setError('Что-то пошло не так 😳');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    city,
    loading,
    error,
    fetchWhetherData
  };
};

export default useWhether;
