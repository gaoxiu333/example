import { useEffect } from "react";
import { createStore, useStore } from "zustand";
import { persist } from "zustand/middleware";

type PositionStoreState = {
  position: {
    x: number;
    y: number;
  };
};

type PositionStoreAction = {
  setPosition: (nextPosition: PositionStoreState["position"]) => void;
};

type PositionStore = PositionStoreState & PositionStoreAction;

const storage_key = "position-storage";

const positionStore = createStore<PositionStore>()(
  persist(
    (set) => ({
      position: { x: 0, y: 0 },
      setPosition: (position) => set({ position }),
    }),
    { name: storage_key }
  )
);

export const ExamplePersist = () => {
  const position = useStore(positionStore, (state) => state.position);
  const setPosition = useStore(positionStore, (state) => state.setPosition);
  useEffect(() => {
    const handle = (event: any) => {
      console.log("event", event);
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };
    document.addEventListener("pointermove", handle);
    return () => {
      document.removeEventListener("pointermove", handle);
    };
  }, []);
  return (
    <div>
      <div>x:{position.x}</div>
      <div>y:{position.y}</div>
    </div>
  );
};
