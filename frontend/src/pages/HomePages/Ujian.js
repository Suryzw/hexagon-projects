// ExamPage.js

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, Button, Badge, Alert } from 'react-bootstrap';

const questions = [
  {
    id: 1,
    text: 'What is the capital of France?',
    options: ['Paris', 'Berlin', 'London', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    id: 2,
    text: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  // Add more questions as needed
];

const ExamPage = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [timer, setTimer] = useState(300); // 5 minutes in seconds
  const [timerId, setTimerId] = useState(null);

  const handleOptionChange = (questionId, selectedOption) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: selectedOption,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearInterval(timerId); // Stop the timer on submission

    // Calculate the score (you can adjust this logic based on your scoring criteria)
    const totalQuestions = questions.length;
    const correctAnswers = questions.reduce(
      (count, question) =>
        question.correctAnswer === answers[question.id] ? count + 1 : count,
      0
    );
    const calculatedScore = (correctAnswers / totalQuestions) * 100;
    setScore(calculatedScore);
  };

  useEffect(() => {
    if (timer === 0) {
      clearInterval(timerId); // Stop the timer when it reaches 0
      handleSubmit({ preventDefault: () => {} }); // Automatically submit the form when the timer reaches 0
    }
  }, [timer, timerId, handleSubmit]);

  useEffect(() => {
    // Start the timer when the component mounts
    const id = setInterval(() => setTimer((prevTimer) => prevTimer - 1), 1000);
    setTimerId(id);

    // Clean up the timer when the component unmounts
    return () => clearInterval(id);
  }, []);

  return (
    <Container className="mt-5">
      <div className="bg-primary text-light p-4 mb-4">
        <h1 className="display-4">Electronic Division Exam</h1>
        <p className="lead">Test your knowledge in electronics!</p>
        <hr className="my-4" />
        <p>Answer the following questions:</p>
      </div>

      {score === null ? ( // Display questions only if the score is not available
        <Form onSubmit={handleSubmit}>
          {questions.map((question) => (
            <Form.Group key={question.id} className="mb-4">
              <Form.Label className="h5">
                {question.text}
                <Badge variant="info" className="ml-2">
                  {`Question ${question.id}`}
                </Badge>
              </Form.Label>
              {question.options.map((option) => (
                <Form.Check
                  type="radio"
                  label={option}
                  name={`question-${question.id}`}
                  id={`option-${question.id}-${option}`}
                  key={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleOptionChange(question.id, option)}
                />
              ))}
            </Form.Group>
          ))}
          <Button type="submit" variant="success" className="mb-3">
            Submit
          </Button>
        </Form>
      ) : (
        <div>
          <h2>Your Score: {score.toFixed(2)}%</h2>
          {score < 70 ? (
            <Alert variant="danger">
              Sorry, you did not pass the test.
            </Alert>
          ) : (
            <Alert variant="success">Congratulations, you passed!</Alert>
          )}
        </div>
      )}

      <div className="mt-4">
        <p>
          Time Remaining: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
        </p>
      </div>
    </Container>
  );
};

export default ExamPage;
