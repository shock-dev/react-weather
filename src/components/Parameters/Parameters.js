import s from './Parameters.module.css';

const Parameters = ({ list }) => {
  return (
    <ul className={s.list}>
      {list.map(({ title, value }) =>
        <li key={title} className={s.item}>
          <p className={s.name}>{title}</p>
          <p className={s.val}>{value}</p>
        </li>
      )}
    </ul>
  );
};

export default Parameters;
