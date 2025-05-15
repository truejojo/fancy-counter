import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

const CountButton = ({ type, setCount, locked }) => {
  const handleClick = (event) => {
    event.currentTarget.blur();

    setCount(
      (prevCount) =>
        prevCount +
        (type === 'minus' ? (prevCount <= 0 ? 0 : -1) : prevCount >= 5 ? 0 : 1),
    );
  };

  return (
    <button disabled={locked} onClick={handleClick} className='count-btn '>
      {type === 'minus' ? (
        <MinusIcon className='count-btn-icon' />
      ) : (
        <PlusIcon className='count-btn-icon count-btn--plus' />
      )}
    </button>
  );
};

export default CountButton;
