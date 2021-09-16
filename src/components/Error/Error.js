import s from './Error.module.scss';

const Error = ({ error, onTryAgain }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.message}>
        {error}
      </p>
      <button
        type="button"
        className={s.btn}
        onClick={onTryAgain}
      >
        Попробовать снова
      </button>
    </div>
  );
};

export default Error;
