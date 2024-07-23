import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "../components/ui/NavBar";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="font-sans text-base">
        <NavBar />

        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </>
  ),
});
