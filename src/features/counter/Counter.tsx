import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
} from './counterSlice';

export function Counter() {
  const count = useSelector(
    (state: { counter: { value: number } }) => state.counter.value
  );
  const dispatch: AppDispatch = useDispatch();
  const [input, setInput] = useState('2');
  const incrementValue = Number(input) || 0;

  return (
    <div>
      <div>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <span>{count}</span>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
      <div>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button
          onClick={() => {
            dispatch(incrementByAmount(incrementValue));
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            dispatch(incrementAsync(incrementValue));
          }}
        >
          Async
        </button>
        <button
          onClick={() => {
            dispatch(incrementIfOdd(incrementValue));
          }}
        >
          Odd
        </button>
      </div>
    </div>
  );
}
