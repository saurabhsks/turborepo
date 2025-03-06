"use client";
import useCounterStore from "../store/counterStore";

const Counter = () => {
  const { count, increase, decrease } = useCounterStore();

  return (
    <div className="p-4 border rounded-lg shadow-md text-center">
      <h2 className="text-xl font-semibold">Counter: {count}</h2>
      <button className="px-4 py-2 m-2 bg-blue-500 text-white rounded" onClick={increase}>
        Increment
      </button>
      <button className="px-4 py-2 m-2 bg-red-500 text-white rounded" onClick={decrease}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;
