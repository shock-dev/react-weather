import s from './Weather.module.scss';
import Rain from '../../assets/weather/Rain.png';
import Clouds from '../../assets/weather/Clouds.png';
import Clear from '../../assets/weather/Clear.png';

const icons = {
  Rain,
  Clouds,
  Clear
};

const Weather = ({ temp, desc, icon }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <img
          className={s.img}
          src={icons[icon]}
          alt={icon}
        />
        <span className={s.degrees}>
          {Math.round(temp)}
          º
        </span>
      </div>
      <p className={s.desc}>
        {desc}
      </p>
    </div>
  );
};

export default Weather;
