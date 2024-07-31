import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "../components/ui/NavBar";
import { NotFound } from "../pages/notFound.page";
import { SearchPopUp } from "../components/search/SearchPopUp";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="font-sans text-base">
        <SearchPopUp />
        <NavBar />

        <Outlet />

        <TanStackRouterDevtools />
      </div>
    </>
  ),

  notFoundComponent: NotFound,
});
