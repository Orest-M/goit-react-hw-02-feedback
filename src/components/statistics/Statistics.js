import css from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <ul className={css.statistics__list}>
        <li className="statistics__item">Good: {good}</li>
        <li className="statistics__item">Neutral: {neutral}</li>
        <li className="statistics__item">Bad: {bad}</li>
        <li className="statistics__item">Total: {total}</li>
        <li className="statistics__item">
          Positive feedback: {positivePercentage ? positivePercentage : 0}%
        </li>
      </ul>
    </div>
  );
};

export default Statistics;
