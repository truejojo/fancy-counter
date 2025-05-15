import { useState } from 'react';
import Title from './Title';
import Count from './Count';
import ResetButton from './ResetButton';
import ButtonContainer from './ButtonContainer';

const Card = () => {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer locked={locked} setCount={setCount} />
    </div>
  );
};

export default Card;
