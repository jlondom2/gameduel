import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "../components/ui/NavBar";
import { NotFound } from "../pages/notFound.page";
import { SearchPopUp } from "../components/search/SearchPopUp";
import { Footer } from "../components/ui/Footer";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="font-sans text-base">
        <SearchPopUp />
        <NavBar />

        <Outlet />

        <Footer />

        <TanStackRouterDevtools />
      </div>
    </>
  ),

  notFoundComponent: NotFound,
});
