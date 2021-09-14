const fillParams = (res) => {
  return [
    {
      title: 'Ветер',
      value: `${res.wind.speed} м/c, западный`
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
      value: '56%'
    }
  ];
};

export default fillParams;
