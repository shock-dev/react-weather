import { useRef, useState } from 'react';
import Selection from '../Selection';
import useOutsideClick from '../../hooks/useOutsideClick';
import ChooseCityPanel from '../ChooseCityPanel';

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
        <Selection
          city={city}
          onSubmit={submitHandler}
        />
      </div>
    ) : (
      <ChooseCityPanel
        city={city}
        openForm={() => setIsChoosing(true)}
      />
    )
  );
};

export default ChooseCity;
