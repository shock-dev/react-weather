import s from './Button.module.css';
import sprite from '../../assets/[icons].svg';

const Button = ({ onClick, children, icon = null }) => {
  return (
    <button
      type="button"
      className={s.btn}
      onClick={onClick}
    >
      {icon && (
        <svg>
          <use href={`${sprite}#${icon}`} />
        </svg>
      )}
      {children}
    </button>
  );
};

export default Button;
