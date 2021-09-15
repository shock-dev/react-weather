const degToStr = (d) => {
  const directions = [
    'северный',
    'северо-восточный',
    'восточный',
    'юго-восточный',
    'южный',
    'юго-западный',
    'западный',
    'северо-западный'
  ];
  const res = d < 0
    ? 360 - Math.abs(d) % 360
    : d % 360;
  return `${directions[res / 45 | 0]}`;
};

export default degToStr;
