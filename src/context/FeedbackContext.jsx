import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    { id: 1, text: "This item is from context", rating: 10 },
    { id: 2, text: "item 2", rating: 5 },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  //Delete Feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //add Feedback
  const addFeedback = (newFeedback) => {
    //create id
    newFeedback.id = uuidv4();
    setFeedback([...feedback, newFeedback]);
  };

  //Edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //updateFeedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        editFeedback,
        addFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
