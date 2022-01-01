import { ResultsProps } from './types';

export const Results = (props: ResultsProps) => {
  const { correctAnswers, incorrectAnswers } = props;

  return (
    <div className="mb-3">
      <div>Correct answers: {correctAnswers}</div>
      <div>Incorrect answers: {incorrectAnswers}</div>
    </div>
  );
};

Results.displayName = 'Results';
