import PropTypes from 'prop-types';

import css from './leaveFeedback.module.css';

const LeaveFeedback = ({ incrementFeedback }) => {
  return (
    <div>
      <ul className={css.feedback__list} onClick={incrementFeedback}>
        <li>
          <button data-btn className={css.feedback__btn}>
            Good
          </button>
        </li>
        <li>
          <button data-btn className={css.feedback__btn}>
            Neutral
          </button>
        </li>
        <li>
          <button data-btn className={css.feedback__btn}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};

LeaveFeedback.propTypes = {
  incrementFeedback: PropTypes.func,
};

export default LeaveFeedback;
