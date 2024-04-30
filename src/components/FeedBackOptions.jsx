export const FeedBackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div>
        {options.map(option => (
          <button onClick={() => onLeaveFeedback(option)}>{option}</button>
        ))}
      </div>
    </>
  );
};
