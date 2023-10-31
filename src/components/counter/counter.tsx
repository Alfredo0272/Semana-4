import { useContext, useEffect, useState } from 'react';
import './counter.scss';
import { AppContext } from '../Contetx/app.context';

export const Counter = () => {
  console.log('Render Counter');
  const { foo } = useContext(AppContext);
  console.log(foo);

  const initialCounter = 0;
  const [count, setCount] = useState(initialCounter);

  useEffect(() => {
    console.log('First Render Counter');
    console.log('Initial count', initialCounter);
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = (increment: number) => {
    setCount(count + increment);
  };

  return (
    <section className="counter">
      <p>{count}</p>
      <button onClick={() => handleClick(+1)}>+</button>
      <button onClick={() => handleClick(-1)}>-</button>
    </section>
  );
};
