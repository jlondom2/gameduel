import { SlideShow } from "../components/SlideShow";
import { CounterHook } from "../components/CounterHook";

export const HomePage = () => {
  return (
    <div>
      <SlideShow />
      <div className="container py-6">
        <CounterHook />
      </div>
    </div>
  );
};
