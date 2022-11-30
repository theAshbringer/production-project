/* eslint-disable i18next/no-literal-string */
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { counterActions } from '../model/slice/counterSlice';

export const Counter = () => {
  const counterValue = useSelector(getCounterValue);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(counterActions.increment());
  };
  const decrementCounter = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-holder">{counterValue}</h1>
      <Button onClick={incrementCounter}>Увеличить</Button>
      <Button onClick={decrementCounter}>Уменьшить</Button>
    </div>
  );
};
