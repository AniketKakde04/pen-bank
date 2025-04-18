
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useState, useEffect } from "react";

const images = [
  "/lovable-uploads/IMG-20220621-WA0001.jpg",
  "/lovable-uploads/b46dcf0c-9688-489a-9b00-c0860eda7ceb.png",
  "/lovable-uploads/cf82f41d-5a04-41dc-95dc-b5e99a7b72f5.png",
  "/lovable-uploads/a4f05e8e-074c-4292-8ce8-803224fe1c04.png",
  "/lovable-uploads/f8e36d60-4460-42a9-830c-b12795d7bf5b.png"
];

export const HeroCarousel = () => {
  const [api, setApi] = useState<any>();

  useEffect(() => {
    if (!api) return;

    // Auto advance slides every 5 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      setApi={setApi}
      className="absolute inset-0 w-full h-full " // Added z-0 to ensure it's behind other elements
    >
      <CarouselContent className="h-full">
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-full">
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};
