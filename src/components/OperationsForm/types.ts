import { OperationType } from '../../enums/OperationType';

export interface OperationsFormProps {
  onSubmit?: (operations: OperationType[]) => void;
}
