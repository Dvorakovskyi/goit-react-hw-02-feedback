import React from "react";
import PropTypes from 'prop-types';

const FeedbackOptions = ({ good, neutral, bad }) => {
    return (
    <section>
        <h1>Please leave your feedback</h1>
        <div>
            <button type="button" onClick={good}>
                Good
            </button>
            <button type="button" onClick={neutral}>
                Neutral
            </button>
            <button type="button" onClick={bad}>
                Bad
            </button>
        </div>
        </section>
    )
};

FeedbackOptions.propTypes = {
    good: PropTypes.func.isRequired,
    neutral: PropTypes.func.isRequired,
    bad: PropTypes.func.isRequired,
}

export default FeedbackOptions;