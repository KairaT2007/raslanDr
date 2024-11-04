import { BackgroundLinesDemo } from "@/components/partials/BackgroundLinesDemo";
import { AppleCardsCarouselDemo } from "@/components/partials/Carousel";
import { HeroScrollDemo } from "@/components/partials/HeroScrollDemo";
import { TimelineDemo } from "@/components/partials/TimelineDemo";

export default function Home() {
  return (
    <div>
      <BackgroundLinesDemo />
      <AppleCardsCarouselDemo />
      <TimelineDemo />
      <HeroScrollDemo />
    </div>
  );
}
