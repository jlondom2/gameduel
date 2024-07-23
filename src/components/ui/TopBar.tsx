import { Button } from "./Button";

export const TopBar = () => {
  return (
    <div className="mx-auto flex w-full justify-end bg-gray py-2 text-white">
      <div className="container max-w-screen-xl px-10">
        <div className="flex items-center justify-end">
          <Button color={"text-white"} bg={"bg-pink-100"} size="tiny">
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
};
