import { Component } from 'react';

import LeaveFeedback from './leave-feedback/LeaveFeedback';
import Statistics from './statistics/Statistics';
import Section from './section/Section';
import Notification from './notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementFeedback = e => {
    if (e.target.dataset.btn) {
      this.setState(prevState => {
        return {
          [e.target.textContent.toLowerCase()]:
            prevState[e.target.textContent.toLowerCase()] + 1,
        };
      });
    }
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;

    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div style={{ margin: '15px 0 0 15px' }}>
        <Section title="Please leave feedback">
          <LeaveFeedback
            incrementFeedback={this.incrementFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
