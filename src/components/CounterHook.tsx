import { useCount } from "../hooks/useCount";

export const CounterHook = () => {
  const { count, ref, handleClick } = useCount();

  return (
    <>
      <h1>CounterHook</h1>

      <button
        ref={ref}
        disabled={count.value >= count.max}
        onClick={() => handleClick()}
        className="bg-blue-100 w-48 px-4 py-1 text-white disabled:cursor-not-allowed disabled:bg-slate-500"
      >
        Count: {count.value}
      </button>
    </>
  );
};
