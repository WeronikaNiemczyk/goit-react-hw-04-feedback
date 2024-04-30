export const Statistics = ({
  feedbackStats,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => (
  <div>
    <div>
      <p>Good: {feedbackStats.good}</p>
      <p>Neutral: {feedbackStats.neutral}</p>
      <p>Bad: {feedbackStats.bad}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {countPositiveFeedbackPercentage()}%</p>
    </div>
  </div>
);
