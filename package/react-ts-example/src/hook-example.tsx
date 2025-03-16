import { useEffect, useRef } from "react";

// bed
function DelayedEffect(props: { timerMs: number }) {
  const { timerMs } = props;
  useEffect(() => setTimeout(() => {}, timerMs), [timerMs]);
  return null;
}
// good
function DelayedEffectTrue(props: { timerMs: number }) {
  const { timerMs } = props;
  useEffect(() => {
    setTimeout(() => {}, timerMs);
  }, [timerMs]);
  return null;
}

// useRef
function Foo() {
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!divRef.current) throw Error("divRef is not assigned");
    console.log(divRef.current);
  });
  return <div ref={divRef}></div>;
}
// 表单
function FormEvent() {
  // 推断的函数签名
  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    console.log("event", event.currentTarget.value);
  };
  // @types/react 强制指定了委托函数的类型
  const handleChange1: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    console.log("event", event.currentTarget.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <input type="text" onChange={handleChange1} />
    </div>
  );
}
export { DelayedEffect, DelayedEffectTrue, FormEvent, Foo };
