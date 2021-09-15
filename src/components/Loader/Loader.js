import s from './Loader.module.css';

const Loader = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.ldsRing}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};

export default Loader;
