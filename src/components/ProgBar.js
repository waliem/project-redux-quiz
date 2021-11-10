import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useSelector } from 'react-redux';
import './progBar.css';

export const ProgBar = () => {
  const question = useSelector(
    (store) => store.quiz.questions[store.quiz.currentQuestionIndex]
  );
  // console.log('QUESTION', question);

  const now = (question.id / 5) * 100;
  const progressInstance = (
    <ProgressBar now={now} label={`${now}%`} visuallyHidden />
  );

  return progressInstance;
};

// followed this: https://react-bootstrap.github.io/components/progress/