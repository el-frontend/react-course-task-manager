import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Sidebar from "./sidebar/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background dark">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
