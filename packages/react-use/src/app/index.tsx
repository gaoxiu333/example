import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

let i = 0;
function initState() {
  // console.log("init", i);
  i = i + 1;
  return i;
}
const Home = () => {
  const [count, setCount] = useState(initState());
  // const [other, setOther];
  const ref = useRef(null);
  const handleClick = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("useEffect", count);
    return () => {
      console.log("useEffect===== unmount", count, ref.current);
    };
  }, [count]);
  useLayoutEffect(() => {
    console.log("useLayoutEffect", count);
    console.log(ref);
    setCount(count + 1);
    return () => {
      console.log("useLayoutEffect===== unmount", count, ref.current);
      console.log(ref.current);
    };
  }, []);
  return (
    <div ref={ref} onClick={handleClick}>
      count: {count}
    </div>
  );
};

const ITMES = [
  {
    title: "home",
    href: "/home",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "demo",
    href: "/demo",
  },
  {
    title: "component",
    href: "/component",
  },
];
export function App() {
  return (
    <div className="flex flex-col items-center h-screen bottom-1">
      <header className="py-3 mt-10 space-x-2">
        <Link to="/">
          <span>logo</span>
        </Link>

        {ITMES.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              (isActive
                ? "bg-slate-300/30 rounded-md "
                : "hover:bg-transparent hover:underline") +
              " " +
              "justify-start p-2"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </header>
      <main className="py-12">
        <Home />
        <Outlet />
      </main>
      <footer>by Vite+React+Tailwind</footer>
    </div>
  );
}
