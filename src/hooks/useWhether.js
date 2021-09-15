import { useState } from 'react';
import WeatherAPI from '../api/weather';

const useWhether = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchWhetherData = async (city) => {
    try {
      setLoading(true);
      setData(await WeatherAPI.getByCity(city));
    } catch (e) {
      setError('Что-то пошло не так 😳');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    setError,
    fetchWhetherData
  };
};

export default useWhether;
