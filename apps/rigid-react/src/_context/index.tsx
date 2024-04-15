import { useContext, useState } from "react";
import { LevelContext, SetLevelContext } from "./LevelContext";

const PageA = () => {
  const level = useContext(LevelContext);
  const setLevel = useContext(SetLevelContext);
  return (
    <>
      <h1>{level}</h1>
      <button
        onClick={() => {
          setLevel(level + 1);
        }}
      >
        Add{level}
      </button>
    </>
  );
};

const Page = () => {
  const [value, setValue] = useState(0);
  const level = useContext(LevelContext);
  return (
    <>
      <h1>{level}</h1>
      <LevelContext.Provider value={value}>
        <SetLevelContext.Provider value={setValue}>
          <PageA />
        </SetLevelContext.Provider>
      </LevelContext.Provider>
    </>
  );
};

export default Page;
