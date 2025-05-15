import { useState } from 'react';
import Title from './Title';
import Count from './Count';
import ResetButton from './ResetButton';
import ButtonContainer from './ButtonContainer';

const Card = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='card'>
      <Title />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer setCount={setCount} />
    </div>
  );
};

export default Card;
