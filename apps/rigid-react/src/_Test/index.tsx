import { useState } from "react";

/**
 *
 * props 类型
 */
export function Page(props: {
  children: React.ReactNode;
  childrenElement?: React.JSX.Element;
  styles?: React.CSSProperties;
  onChange?: React.FormEventHandler<HTMLInputElement>;
}) {
  return <>{props.children}</>;
}

// function Types
const App1: React.FC = () => {
  const [value, setValue] = useState<string | null>(null);
  return <></>;
};

export { App1 };
