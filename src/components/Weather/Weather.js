import s from './Weather.module.css';
import SunImg from '../../assets/sun.png';

const Weather = ({ temp, desc }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.top}>
        <img
          className={s.img}
          src={SunImg}
          alt="Sun"
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
