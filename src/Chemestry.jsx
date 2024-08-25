import "./chemestry.css";
import { useState, useEffect } from "react";

function Chemestry() {
  const [questions, setQuestions] = useState([]);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [answeredQuestion, setAnsweredQuestion] = useState({});

  const [marks, setMarks] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [timer, setTimer] = useState(100);

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching questions:", error));
  }, []);

  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          clearInterval(countdown);
          setShowResults(true);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const handleAnswer = (questionIndex, optionIndex) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));
    setAnsweredQuestion((prev) => ({
      ...prev,
      [questionIndex]: true,
    }));
    tMarks(questionIndex, optionIndex);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };
  const tMarks = (questionIndex, optionIndex) => {
    const correct = questions[questionIndex].answer === optionIndex;
    if (correct) {
      setMarks((prev) => prev + 5);
    }
  };
  return (
    <div>
      <h1>Chemistry</h1>
      <span className="margin">Time: {formatTime(timer)}</span>
      <span className="margin">Max. Marks: 50</span>
      <span className="margin">Min. Marks: {marks}</span>
      <hr />
      <div className="box">
        {questions.map((question, index) => (
          <div key={index} className="question-box">
            <h2>
              Q.{index + 1} {question.question}
            </h2>
            {Array.isArray(question.options) && question.options.length > 0 && (
              <ul>
                {question.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswers[index] === optionIndex;
                  const isCorrect = question.answer === optionIndex;
                  const isIncorrect = isSelected && !isCorrect;

                  return (
                    <li
                      className={`options ${
                        isSelected ? (isCorrect ? "correct" : "incorrect") : ""
                      } ${timer <= 0 ? (isCorrect ? "correct" : "") : ""} `}
                      key={optionIndex}
                    >
                      <input
                        type="radio"
                        id={`question_${index}_option_${optionIndex}`}
                        name={`question_${index}`}
                        value={option}
                        onClick={() => handleAnswer(index, optionIndex)}
                        disabled={answeredQuestion[index] || timer <= 0}
                      />
                      {"  "}
                      <label
                        htmlFor={`question_${index}_option_${optionIndex}`}
                      >
                        {option}
                      </label>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chemestry;
