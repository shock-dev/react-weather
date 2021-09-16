import s from './Switcher.module.scss';
import UnitsType from '../../types/units';

const switchers = [...Object.values(UnitsType)];

const Switcher = ({ active, toggle }) => {
  const toggleHandler = (selected) => {
    if (active !== selected) {
      toggle(selected);
    }
  };

  return (
    <div className={s.wrapper}>
      {switchers.map((unit) =>
        <label key={unit} className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="unit"
            checked={active === unit}
            onChange={() => toggleHandler(unit)}
          />
          <span className={s.fake}>
            {unit}
          </span>
        </label>
      )}
    </div>
  );
};

export default Switcher;
