import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <ul className={styles.optionsList}>
        {options.map(option => (
            <li key={option} >
                <button className={styles[option]} type="button" onClick={() => onLeaveFeedback(option)}>{option}</button>
            </li>
        ))}
    </ul>
);

FeedbackOptions.propTypes = {
    options: PropTypes.array,
}
export default FeedbackOptions;