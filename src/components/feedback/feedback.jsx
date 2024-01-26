export const Feedback = ({ value: { good, neutral, bad }, total }) => {
  const positivePercent = Math.round(((good + neutral) / total) * 100);
  console.log(total)
  return (
    <ul>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>

      {total > 0 ? (
        <li>
          <p>Total: {total}</p>
          <p>Posistive: {positivePercent}%</p>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
};
