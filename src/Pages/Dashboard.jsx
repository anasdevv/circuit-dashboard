import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Dashboard = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/");
  const activePathname = pathnames.pop();

  const routes = [
    {
      path: "tunnel-view",
      label: "Tunnel View",
    },
    {
      path: "maintenance-info",
      label: "Maintenance Information",
    },
    {
      path: "circuit-dashboard",
      label: "Circuit Dashboard",
    },
  ];
  return (
    <div className=" w-full h-screen py-5">
      {/* header */}
      <div className="h-16 flex items-center justify-between px-16 py-5 border-b border-[#546AA2]">
        <img src="/logo.svg" />
        <div className="flex items-center gap-x-8">
          {routes.map((r) => (
            <div className="flex flex-col gap-y-2 relative">
              {" "}
              <Link
                to={`/dashboard/${r.path}`}
                className="text-xl text-[#A9B0BE]"
              >
                {r.label}
              </Link>
              {activePathname === r.path && (
                <div className="bg-[#6A75EA] h-[2px] absolute  top-10 left-0 right-0" />
              )}
            </div>
          ))}
        </div>
        {/* {r.path} */}
        <div className="w-12 h-12 rounded-full bg-[#5A61D7] text-white text-3xl flex items-center justify-center">
          A
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
