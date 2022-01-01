import { OperationType } from '../../enums/OperationType';

export interface Task {
  text: string;
  correctAnswer: string;
}

export interface TaskProps {
  operations: OperationType[];
  onCorrectAnswer?: () => void;
  onIncorrectAnswer?: () => void;
}
