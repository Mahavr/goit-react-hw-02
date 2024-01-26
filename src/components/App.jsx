import { useState, useEffect } from "react";

import "./App.css";
import { Description } from "./description/description";
import { Notification } from "./notification/notification";
import { Options } from "./options/options";

function App() {
  const [feedback, SetFeedback] = useState(() => {
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
    SetFeedback({
      ...feedback,
      [value]: feedback[value] + 1,
    });
  };
  const Reset = () => {
    SetFeedback({ good: 0, neutral: 0, bad: 0 });
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
      <Notification value={feedback} total={totalFeedback} />
    </>
  );
}

export default App;
