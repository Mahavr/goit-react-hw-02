import { Feedback } from "../feedback/feedback";

export const Notification = ({ value, total }) => {
  return (
    <>
      {total > 0 ? (
        <Feedback value={value} total={total} />
      ) : (
        <p>No feedback yet</p>
      )}
    </>
  );
};
