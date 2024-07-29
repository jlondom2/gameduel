import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "../components/ui/NavBar";
import { NotFound } from "../pages/notFound.page";

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

  notFoundComponent: NotFound,
});
