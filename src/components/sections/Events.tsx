
import React from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const eventImages = {
  "Create Best From Waste": [
    "/lovable-uploads/_MG_4510.JPG",
    "/lovable-uploads/_MG_4511.JPG",
    "/lovable-uploads/_MG_4516.JPG",
  ],
  "Artisan Workshop": [
    "/lovable-uploads/_MG_4521.JPG",
    "/lovable-uploads/_MG_4528.JPG",
  ],
  "Eco-Art Exhibition": [
    "/lovable-uploads/IMG-20220621-WA0001.jpg",
    "/lovable-uploads/IMG-20220626-WA0004.jpg",
  ],
};

const upcomingEvents = [
  {
    title: "Create Best From Waste",
    date: "22nd January 2023",
    time: "10:00 AM - 4:00 PM",
    location: "District Collectorate, Yavatmal",
    participants: "10",
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  {
    title: "Artisan Workshop",
    date: "2nd May 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Craft Village, Jaipur",
    participants: "100+ Artisans",
    color: "bg-green-100",
    iconColor: "text-green-600"
  },
  {
    title: "Eco-Art Exhibition",
    date: "15th May 2025",
    time: "9:00 AM - 6:00 PM",
    location: "India Habitat Centre, New Delhi",
    participants: "1000+ Visitors Expected",
    color: "bg-amber-100",
    iconColor: "text-amber-600"
  }
];

const EventGallery = ({ images }: { images: string[] }) => {
  const [api, setApi] = React.useState<any>();

  React.useEffect(() => {
    if (!api) return;

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
      className="w-full h-full"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div 
              className="w-full h-[300px] bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

const Events = () => {
  return (
    <section id="events" className="bg-penBank-cream py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Events Organized</h2>
        <p className="text-center max-w-3xl mx-auto mb-16 text-gray-700">
          Join us in our mission to transform waste into art.
        </p>

        <div className="space-y-12">
          {upcomingEvents.map((event, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className={`${event.color} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    <Calendar className={`h-8 w-8 ${event.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold text-penBank-green-dark mb-4">{event.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Users className="h-4 w-4" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <EventGallery images={eventImages[event.title as keyof typeof eventImages]} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
