import React from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = event => {
    const nameBtn = event.currentTarget.textContent;

    if (nameBtn === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1,
      }));
    }

    if (nameBtn === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
      }));
    }

    if (nameBtn === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
      }));
    }
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);

    return values.reduce((acc, value) => {
      return value + acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() !== 0) {
      return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    } else {
      return 0;
    }
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <FeedbackOptions
          good={this.handleBtnClick}
          neutral={this.handleBtnClick}
          bad={this.handleBtnClick}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default Feedback;
