import React, { useRef } from "react";
import { useEffect, useLayoutEffect, useState } from "react";
import { useBattery, useHover } from "react-use";

// useBattery
const BatteryDemo = () => {
  const state = useBattery();
  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

// useHover
const HoverDemo = () => {
  const element = (hovered: boolean) => (
    <div>hovered: {hovered ? "hovered" : "not hovered"}</div>
  );
  const [hoverable, hovered] = useHover(element);

  useEffect(() => {
    console.log("useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("useLayout");
  }, []);
  return (
    <div>
      {hoverable}
      <div>{hovered ? "hovered" : "not hovered"}</div>
    </div>
  );
};

const useLatest = (value) => {
  console.log(value);
  const ref = React.useRef(value);
  console.log(ref.current, value);
  ref.current = value;
  return ref;
};

const Latest = () => {
  const [count, setCount] = useState(0);
  const refCount = useLatest(count);
  const devRef = useRef(null)
  const handleClick = ()=>{
    devRef.current = null
    console.log('current', devRef.current)
  }
  useEffect(() => {
    const interval = setInterval(() => setCount(refCount.current + 1), 1000);
    // devRef.current = null
    return () => clearInterval(interval);
  }, []);

  return <div ref={devRef} onClick={handleClick}>count: {count}</div>;
};

const HookDemo = () => {
  return (
    <>
      <h1 className="text-2xl">useBattery</h1>
      <BatteryDemo />
      <HoverDemo />
      <Latest />
    </>
  );
};
export { HookDemo };
