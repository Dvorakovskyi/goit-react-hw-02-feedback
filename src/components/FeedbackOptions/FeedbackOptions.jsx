import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <li option={option} key={option}>
            <button type="button" onClick={onLeaveFeedback}>
              {toUpperCase(option)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

function toUpperCase(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
