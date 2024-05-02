import { Link, NavLink, Outlet } from "react-router-dom";

const ITMES = [
  {
    title: "home",
    href: "/home",
  },
  {
    title: "about",
    href: "/about",
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
          <NavLink key={item.href} to={item.href} className={({ isActive }) => (isActive ? "bg-slate-300/30 rounded-md " : "hover:bg-transparent hover:underline") + " " + "justify-start p-2"}>
            {item.title}
          </NavLink>
        ))}
      </header>
      <main className="py-12">
        <Outlet />
      </main>
      <footer>by Vite+React+Tailwind</footer>
    </div>
  );
}
