import React from 'react';
import StatisticsBtns from './StatisticsButtons';
import Statistics from './Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGoodClick = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleNeutralClick = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleBadClick = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

    countTotalFeedback = () => {
        const values = Object.values(this.state);
        return values.reduce((acc, value) => {
            return value + acc;
        }, 0);
    };

    countPositiveFeedbackPercentage = () => {
        const values = Object.values(this.state);
        const total = values.reduce((acc, value) => {
            return value + acc;
        }, 0);

        return this.state.good / total * 100;
    }

    render() {
        const totalFeedback = this.countTotalFeedback();
        const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage;

    return (
        <div>
            <StatisticsBtns
                good={this.handleGoodClick}
                neutral={this.handleNeutralClick}
                bad={this.handleBadClick} />
            <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalFeedback}
            />
      </div>
    );
  }
}

export default Feedback;
