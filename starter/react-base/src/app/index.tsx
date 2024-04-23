import { Outlet } from "react-router-dom";
import { SidebarNav } from "../components/sidebar-nav";

const sidebarNavItems = [
  {
    title: "Page1",
    href: "/page1",
  },
  {
    title: "Page2",
    href: "/page2",
  },
];
export function App() {
  return (
    <>
      <div className="md:hidden">111</div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">App</h2>
          <p className="text-muted-foreground">使用TypeScript构建</p>
        </div>
        <hr />
        {/* <Separator className="my-6" /> */}
        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <aside className="-mx-4 lg:w-1/5">
            <SidebarNav items={sidebarNavItems} />
          </aside>
          <div className="flex-1 lg:max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
