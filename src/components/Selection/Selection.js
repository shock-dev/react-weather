import { useState } from 'react';
import s from './Selection.module.css';

const cities = [
  'Москва',
  'Архангельск',
  'Омск',
  'Санкт-Петербург',
  'Краснодар'
];

const Selection = ({ city, onSubmit }) => {
  const [activeCity, setActiveCity] = useState(city);

  const submitHandler = (e) => {
    onSubmit(activeCity);
    e.preventDefault();
  };

  return (
    <form
      className={s.form}
      onSubmit={submitHandler}
    >
      <select
        className={s.select}
        value={activeCity}
        onChange={(e) => setActiveCity(e.target.value)}
      >
        {cities.map((name) =>
          <option key={name} value={name}>
            {name}
          </option>
        )}
      </select>
      <button
        className={s.btn}
        type="submit"
      >
        Ок
      </button>
    </form>
  );
};

export default Selection;
