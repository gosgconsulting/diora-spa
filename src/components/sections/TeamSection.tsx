import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";
import TeamMemberCard from "./TeamMemberCard";
import { useState } from "react";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  const [api, setApi] = useState<CarouselApi>();

  const scrollToPrevious = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const scrollToNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <section className="py-16" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-dream text-6xl font-medium mb-4" style={{ color: '#3a2c1b' }}>Meet Our Team</h2>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <Carousel
            className="w-full"
            opts={{ align: "start", containScroll: "trimSnaps", dragFree: false, loop: false, slidesToScroll: 1 }}
            setApi={setApi}
          >
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/4">
                  <TeamMemberCard member={member} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="-left-20 bg-[#3a2c1b] text-white hover:opacity-90 h-12 w-12 p-0"
              aria-label="Previous team members"
              onClick={scrollToPrevious}
            />
            <CarouselNext
              className="-right-20 bg-[#3a2c1b] text-white hover:opacity-90 h-12 w-12 p-0"
              aria-label="Next team members"
              onClick={scrollToNext}
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
