import { FC } from 'react';
import Button from 'shared/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from 'entities/counter';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';

export const Counter: FC = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation('common');

  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid='value-title'>{counterValue}</h1>
      <Button onClick={increment} data-testid='increment-button'>{t('increment')}</Button>
      <Button onClick={decrement} data-testid='decrement-button'>{t('decrement')}</Button>
    </div>
  );
};
