import React, { InputHTMLAttributes, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  placeholder?: string;
}
export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    placeholder,
    type = 'text',
  } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div
      className={classNames(cls.inputWrapper, {}, [className])}
    >
      {placeholder && (
      <div className={cls.placeholder}>
        {`${placeholder}>`}
      </div>
      )}
      <div className={cls.caretWrapper}>
        <input
          className={cls.input}
          value={value}
          onChange={onChangeHandler}
          type={type}
        />
        <span className={cls.caret} />
      </div>
    </div>
  );
});
