import {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  FormEventHandler,
  useState,
} from 'react';
import cn from 'classnames';
import { OperationsFormProps } from './types';
import { possibleOperations } from './operations';
import { OperationType } from '../../enums/OperationType';
import { Button } from '../Button';
import cns from './styles.module.scss';

export const OperationsForm = (props: OperationsFormProps) => {
  const [operations, setOperations] =
    useState<OperationType[]>(possibleOperations);
  const [operationsError, setOperationsError] = useState<string>('');

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const operation = event.target.id as OperationType;
    const checked = event.target.checked;

    if (!checked) {
      setOperations(operations => operations.filter(x => x !== operation));
      return;
    }

    setOperations(operations => [...operations, operation]);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    if (operations.length) {
      setOperationsError('');

      const { onSubmit } = props;
      onSubmit && onSubmit(operations);
    } else {
      setOperationsError('Choose at least one math operation to proceed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Choose math operations for tasks:</label>
      </div>
      <div className="mb-3">
        <div className="checkbox-group required">
          {possibleOperations.map(operation => {
            const checked = operations.includes(operation);

            return (
              <div key={operation} className="form-check form-switch">
                <input
                  id={operation}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  checked={checked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor={operation}>
                  {operation}
                </label>
              </div>
            );
          })}
        </div>
      </div>
      {operationsError ? (
        <div className="mb-3">
          <label
            className={cn({
              ['form-label']: true,
              [cns.error]: true,
            })}>
            {operationsError}
          </label>
        </div>
      ) : null}
      <div className="mb-3">
        <Button text="Submit operations" />
      </div>
    </form>
  );
};

OperationsForm.displayName = 'OperationsForm';
