import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselApi } from "@/components/ui/carousel";
import TeamMemberCard from "./TeamMemberCard";
import { useState } from "react";

interface SchemaItem {
  key: string;
  type: string;
  content?: string;
  items?: SchemaItem[];
  [key: string]: any;
}

interface TeamSectionProps {
  items?: SchemaItem[];
}

export default function TeamSection({ items = [] }: TeamSectionProps) {
  const [api, setApi] = useState<CarouselApi>();

  // Extract data from schema items
  const getItemByKey = (key: string): SchemaItem | undefined => {
    return items.find(item => item.key === key);
  };

  const titleItem = getItemByKey('title');
  const subtitleItem = getItemByKey('subtitle');
  const teamMembersItem = getItemByKey('teamMembers');

  const title = titleItem?.content || "Meet Our Team";
  const subtitle = subtitleItem?.content || "";
  const teamMembers = teamMembersItem?.items || [];

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
          <h2 className="font-dream text-6xl font-medium mb-4" style={{ color: '#3a2c1b' }}>{title}</h2>
          {subtitle && (
            <p className="font-garet text-lg" style={{ color: '#3a2c1b' }}>
              {subtitle}
            </p>
          )}
        </div>

        <div className="max-w-6xl mx-auto relative">
          <Carousel
            className="w-full"
            opts={{ align: "start", containScroll: "trimSnaps", dragFree: false, loop: false, slidesToScroll: 1 }}
            setApi={setApi}
          >
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={member.key || index} className="md:basis-1/4">
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
