import axios from '../core/axios';

class WeatherAPI {
  async getByCity(city) {
    const { data } = await axios.get(`/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_KEY}&lang=ru&units=metric`);
    return data;
  }
}

export default new WeatherAPI();
