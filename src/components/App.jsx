import { useState, useEffect } from "react";

import "./App.css";
import { Description } from "./description/description";
import { Notification } from "./notification/notification";
import { Feedback } from "./feedback/feedback";
import { Options } from "./options/options";
function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");

    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }

    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const changeFeedback = (value) => {
    setFeedback({
      ...feedback,
      [value]: feedback[value] + 1,
    });
  };
  const Reset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };
  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;

  return (
    <>
      <Description />
      <Options
        onUpdate={changeFeedback}
        onReset={Reset}
        total={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback value={feedback} total={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
