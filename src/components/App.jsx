import { useState } from 'react';
import { FeedBackOptions } from './FeedBackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export const App = () => {
  const [feedbackStats, setFeedbackStats] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = type => {
    setFeedbackStats(prevStats => ({
      ...prevStats,
      [type]: prevStats[type] + 1,
    }));
  };
  const countTotalFeedback = () => {
    const result =
      feedbackStats.good + feedbackStats.neutral + feedbackStats.bad;
    return result;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    const positiveFeedback = (feedbackStats.good / total) * 100;
    return Math.round(positiveFeedback);
  };
  const isFeedback = countTotalFeedback() > 0;
  return (
    <>
      <div>
        <Section title="Please leave feedback" />
        <FeedBackOptions
          onLeaveFeedback={onLeaveFeedback}
          options={['good', 'neutral', 'bad']}
        />

        <Section title="Statistics" />
        {isFeedback ? (
          <Statistics
            feedbackStats={feedbackStats}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    </>
  );
};

export default App;
