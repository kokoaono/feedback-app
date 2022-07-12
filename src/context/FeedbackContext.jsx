import { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //fetch feedback
  const fetchFeedback = async () => {
    const res = await fetch(
      "http://localhost:5000/feedback?_sort=id&_order=desc"
    );
    const data = await res.json();
    setFeedback(data);
    setIsLoading(false);
  };

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
        isLoading,
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
