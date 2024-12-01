import { AppleCardsCarouselDemo } from "@/components/partials/Carousel";
import Greeting from "@/components/partials/Greeting";
import { TimelineDemo } from "@/components/partials/TimelineDemo";

export default function Home() {
  return (
    <div>
      <Greeting />
      <AppleCardsCarouselDemo />
      <TimelineDemo />
    </div>
  );
}
