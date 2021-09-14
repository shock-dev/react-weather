import { useState } from 'react';
import s from './Selection.module.css';

const cities = [
  'Москва',
  'Архангельск',
  'Омск',
  'Санкт-Петербург'
];

const Selection = ({ onSubmit }) => {
  const [city, setCity] = useState('Архангельск');

  const submitHandler = (e) => {
    onSubmit(city);
    e.preventDefault();
  };

  return (
    <form
      className={s.form}
      onSubmit={submitHandler}
    >
      <select
        className={s.select}
        value={city}
        onChange={(e) => setCity(e.target.value)}
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
