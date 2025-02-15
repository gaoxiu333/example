import { useEffect, useState } from "react";

const observables = new Set<any>();
const useRerender = () => {
  const [, rerender] = useState({});
  return () => rerender({});
};

export const observer =
  (component: any) =>
  (...props: any) => {
    const rerender = useRerender();
    observables.clear();
    useEffect(() => {
      observables.forEach((observable) => observable.subscribe(rerender));
      return () =>
        observables.forEach((observable) => observable.unsubscribe(rerender));
    }, [rerender]);
    return component(...props);
  };

export const observable = (value: any) => ({
  value,
  listeners: new Set(),
  get() {
    observables.add(this);
    return this.value;
  },
  set(value: any) {
    this.value = value;
    this.notify();
  },
  subscribe(listener: any) {
    this.listeners.add(listener);
  },
  unsubscribe(listener: any) {
    this.listeners.delete(listener);
  },
  notify() {
    this.listeners.forEach((listener: any) => listener());
  },
});
