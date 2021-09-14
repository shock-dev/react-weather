import { useState } from 'react';
import WeatherAPI from '../api/weather';

const useWhether = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWhetherData = async (city) => {
    try {
      setLoading(true);
      setData(await WeatherAPI.getByCity(city));
    } catch (e) {
      setError('Что-то пошло не так, попробуйте снова');
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchWhetherData
  };
};

export default useWhether;
