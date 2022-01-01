import { useMathNumberOfTheDay } from '../../hooks/useMathNumberOfTheDay';
import cns from './styles.module.scss';

export const NumberOfTheDay = () => {
  const { value, errorMessage } = useMathNumberOfTheDay();

  if (errorMessage) {
    return <div className="error">{errorMessage}</div>;
  }

  if (!value) {
    return null;
  }

  return (
    <div className={cns.link}>
      <a
        className="link"
        href="https://api.math.tools/numbers/nod"
        rel="nofollow"
        target="_blank">
        NumberOfTheDay
      </a>
      <span>: {value}</span>
    </div>
  );
};
