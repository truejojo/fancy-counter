import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const CountButton = ({ type, setCount }) => {
  const handleClick = () => {
    setCount((prevCount) => prevCount + (type === 'minus' ? -1 : 1));
  };

  return (
    <button onClick={handleClick} className='count-btn '>
      {type === 'minus' ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon count-btn--plus' />
      )}
    </button>
  );
};

export default CountButton;
