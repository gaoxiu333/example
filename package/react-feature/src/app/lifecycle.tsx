import { useEffect, useState, useLayoutEffect } from "react";

interface Props {
  count: number;
}

const Lifecycle02 = ({ count }: Props) => {
  useEffect(() => {
    console.log("lifecycle02 useEffect");
    return () => {
      console.log("lifecycle02 useEffect clean");
    };
  }, [count]);
  useLayoutEffect(() => {
    console.log("lifecycle02 useLayoutEffect");
    return () => {
      console.log("lifecycle02 useLayoutEffect clean");
    };
  }, [count]);
  return (
    <>
      <p>lifecycle02{count}</p>
    </>
  );
};

const Lifecycle01 = ({ count }: Props) => {
  useEffect(() => {
    console.log("lifecycle01 useEffect");
    return () => {
      console.log("lifecycle01 useEffect clean");
    };
  }, [count]);
  useLayoutEffect(() => {
    console.log("lifecycle01 useLayoutEffect");
    return () => {
      console.log("lifecycle01 useLayoutEffect clean");
    };
  }, [count]);
  return (
    <>
      <p>lifecycle01{count}</p>
      <Lifecycle02 count={count} />
    </>
  );
};

export const Lifecycle = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("lifecycle00 useEffect");
    return () => {
      console.log("lifecycle00 useEffect clean");
    };
  }, [count]);
  useLayoutEffect(() => {
    console.log("lifecycle00 useLayoutEffect");
    return () => {
      console.log("lifecycle00 useLayoutEffect clean");
    };
  }, [count]);
  return (
    <>
      <h2>查看 React 执行的生命周期顺序</h2>
      <p>render value:{count}</p>
      <button onClick={() => setCount(count + 1)}>click re-render</button>
      <Lifecycle01 count={count} />
    </>
  );
};
