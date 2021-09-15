import degToStr from './degToString';

const fillParams = (res) => {
  return [
    {
      title: 'Ветер',
      value: `${res.wind.speed} м/c, ${degToStr(res.wind.deg)}`
    },
    {
      title: 'Давление',
      value: `${res.main.pressure} мм рт. ст.`
    },
    {
      title: 'Влажность',
      value: `${res.main.humidity}%`
    },
    {
      title: 'Вероятность дождя',
      value: '10%'
    }
  ];
};

export default fillParams;
