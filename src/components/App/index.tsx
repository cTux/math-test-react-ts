import { useState } from 'react';
import cn from 'classnames';
import { Results } from '../Results';
import { OperationsForm } from '../OperationsForm';
import { TaskForm } from '../TaskForm';
import { NumberOfTheDay } from '../NumberOfTheDay';
import { OperationType } from '../../enums/OperationType';
import cns from './styles.module.scss';

export const App = () => {
  const [operations, setOperations] = useState<OperationType[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);

  const hasOperations = operations.length > 0;

  const handleOperationsSubmit = (operations: OperationType[]) =>
    setOperations(operations);

  const handleCorrectAnswer = () =>
    setCorrectAnswers(previousValue => previousValue + 1);

  const handleIncorrectAnswer = () =>
    setIncorrectAnswers(previousValue => previousValue + 1);

  return (
    <div
      className={cn({
        [cns.app]: true,
        container: true,
      })}>
      <NumberOfTheDay />
      <Results
        correctAnswers={correctAnswers}
        incorrectAnswers={incorrectAnswers}
      />
      {hasOperations ? (
        <TaskForm
          operations={operations}
          onCorrectAnswer={handleCorrectAnswer}
          onIncorrectAnswer={handleIncorrectAnswer}
        />
      ) : (
        <OperationsForm onSubmit={handleOperationsSubmit} />
      )}
    </div>
  );
};

App.displayName = 'App';
