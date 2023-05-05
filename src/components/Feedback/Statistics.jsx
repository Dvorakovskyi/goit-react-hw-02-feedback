import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total=0 }) => {
    return (
        <section>
            <h2>Statistics</h2>
            <ul>
                <li>Good: {good}</li>
                <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
            </ul>
        </section>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
}

export default Statistics;