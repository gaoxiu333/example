import { observable } from "../libs/mobx";

const exampleValue = 123;
const observableValue = observable(exampleValue);

observableValue.subscribe(() => {
  console.log("------ subscribe", observableValue.get());
});

export const MobxExample = () => {
  const handleClick = () => {
    observableValue.set(1 + observableValue.get());
  };
  return (
    <>
      <div>
        <h3>Mobx</h3>
        <button onClick={handleClick}>change</button>
        <p>{observableValue.get()}</p>
      </div>
    </>
  );
};
