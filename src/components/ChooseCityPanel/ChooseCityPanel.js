import s from './ChooseCityPanel.module.css';
import Button from '../Button/Button';

const ChooseCityPanel = ({ city, openForm }) => {
  return (
    <div>
      <h2 className={s.title}>
        {city}
      </h2>
      <div className={s.actions}>
        <Button onClick={openForm}>
          Сменить город
        </Button>
        <Button icon="geo">
          Мое местоположение
        </Button>
      </div>
    </div>
  );
};

export default ChooseCityPanel;
