import React, { useState } from "react";

const Child1 = () => {
  console.log("child1 渲染");
  return (
    <div>
      <Child2></Child2>
    </div>
  );
};

const Child2 = () => {
  console.log("child2 渲染");
  return <div>hello</div>;
};

const ChildMemo = React.memo(Child1);

const ReactRender1 = (props) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  console.log("父组件渲染");
  return (
    <div>
      父组件
      <button onClick={handleClick}>{show ? "隐藏" : "显示"}</button>
      {props.children}
      {/* <Wrapper children={<Child1 />} /> */}
      <ChildMemo />
    </div>
  );
};

function Wrapper(props) {
  return <div>{props.children}</div>;
}

const ReactRender = () => {
  return (
    <ReactRender1>
      <Child1 />
    </ReactRender1>
  );
};

export { ReactRender };
