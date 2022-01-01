import { ButtonProps } from './types';

export const Button = (props: ButtonProps) => {
  const { text, onClick: handleOnClick } = props;

  return (
    <button type="submit" className="btn btn-primary" onClick={handleOnClick}>
      {text}
    </button>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  text: 'Button',
} as ButtonProps;
