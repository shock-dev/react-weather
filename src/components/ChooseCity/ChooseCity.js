import { useRef, useState } from 'react';
import s from './ChooseCity.module.css';
import sprite from '../../assets/[icons].svg';
import Selection from '../Selection';
import useOutsideClick from '../../hooks/useOutsideClick';

const ChooseCity = ({ city, onSubmit }) => {
  const [isChoosing, setIsChoosing] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => {
    if (isChoosing) {
      setIsChoosing(false);
    }
  });

  const submitHandler = async (cityName) => {
    await onSubmit(cityName);
    setIsChoosing(false);
  };

  return (
    isChoosing ? (
      <div ref={ref}>
        <Selection onSubmit={submitHandler} />
      </div>
    ) : (
      <div>
        <h2 className={s.title}>
          {city}
        </h2>
        <div className={s.actions}>
          <button
            className={s.btn}
            type="button"
            onClick={() => setIsChoosing(true)}
          >
            Сменить город
          </button>
          <button
            className={s.btn}
            type="button"
          >
            <svg>
              <use href={`${sprite}#geo`} />
            </svg>
            Мое местоположение
          </button>
        </div>
      </div>
    )
  );
};

export default ChooseCity;
