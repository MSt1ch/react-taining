import {
  FC, InputHTMLAttributes, ChangeEvent, memo, useState, useEffect, useRef,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import css from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
  className?: string;
  value?: string;
  onChange?: (value: string) => string;
  placeholder?: string;
  autofocus?: boolean;
}
export const Input: FC<InputProps> = memo(({
  // eslint-disable-next-line react/prop-types
  className, value, onChange, placeholder, autofocus, type = 'text', ...restProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [caretPosition, setCaretPosition] = useState(0);
  const ref = useRef<HTMLInputElement>();

  useEffect(() => {
    if (autofocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autofocus]);
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPosition(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPosition(e?.target.selectionStart || 0);
  };

  return (
    <div className={classNames(css.inputWrap, {}, [className])}>
      { placeholder && <div className={css.placeholder}>{`${placeholder}>`}</div> }
      <div className={css.caretWrap}>
        <input
          {...restProps}
          ref={ref}
          type={type}
          onChange={onChangeHandler}
          className={css.input}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
        />
        { isFocused && <span style={{ left: `${caretPosition * 8}px` }} className={css.caret} />}
      </div>
    </div>
  );
});
