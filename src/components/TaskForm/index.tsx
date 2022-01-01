import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import { Task, TaskProps } from './types';
import { getTask } from '../../utils/getTask';
import { Button } from '../Button';

export const TaskForm = (props: TaskProps) => {
  const { operations } = props;

  const [task, setTask] = useState<Task>(getTask(operations));
  const [answerValue, setAnswerValue] = useState<string>('');

  const handleAnswerValue: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>,
  ) => setAnswerValue(event.target.value);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setAnswerValue('');
    setTask(getTask(operations));

    const { onCorrectAnswer, onIncorrectAnswer } = props;
    if (task.correctAnswer === answerValue) {
      onCorrectAnswer && onCorrectAnswer();
    } else {
      onIncorrectAnswer && onIncorrectAnswer();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div>Solve: {task.text}</div>
        <label htmlFor="input-answer" className="form-label">
          Your answer:
        </label>
        <input
          id="input-answer"
          className="form-control"
          type="number"
          value={answerValue}
          onChange={handleAnswerValue}
          required
        />
      </div>
      <div className="mb-3">
        <Button text="Submit answer" />
      </div>
    </form>
  );
};

TaskForm.displayName = 'TaskForm';
