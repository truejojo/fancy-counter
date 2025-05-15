import Title from './Title';
import Count from './Count';
import ResetButton from './ResetButton';
import CountButtons from './CountButtons';

const Card = () => {
  return (
    <div className='card'>
      <Title />
      <Count count={0} />
      <ResetButton />
      <CountButtons />
    </div>
  );
};

export default Card;
