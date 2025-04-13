import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const showcaseItems = [
  {
    id: 1,
    title: "Designer Frames",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD7kmrIPAioOWpR15mKICaR6_cZa9fmf8gHA&s",
    description: "Browse our collection of premium designer frames.",
  },
  {
    id: 2,
    title: "Sunglasses",
    image: "https://www.eyewearlabs.com/cdn/shop/products/26_2da7ad80-b178-424b-8125-6be4a1a8199e.png?v=1739274756",
    description: "Protect your eyes with stylish sunglasses.",
  },
  {
    id: 3,
    title: "Contact Lenses",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugpoYjI2rk0Jf8PpPN1Fpekfxh6dg1fie8Q&s",
    description: "Find the right contact lenses for your lifestyle.",
  },
  {
    id: 4,
    title: "Kids' Eyewear",
    image: "https://down-my.img.susercontent.com/file/e572dafd786881b6604116cae099960c",
    description: "Durable and fun frames for children.",
  },
];

const ShowcaseSection = () => {
  return (
    <section id="showcase" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-eyegray-dark mb-3">Our Optical Shop</h2>
          <p className="text-eyegray-dark max-w-xl mx-auto text-sm sm:text-base">
            Explore our wide selection of eyewear products, from designer frames to specialty lenses.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {showcaseItems.map((item) => (
              <CarouselItem key={item.id} className="pl-2 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="p-4 sm:p-5">
                    <h3 className="text-base sm:text-lg font-semibold text-eyegray-dark mb-2">{item.title}</h3>
                    <p className="text-eyegray mb-3 text-sm sm:text-base">{item.description}</p>
                    <Button variant="outline" asChild className="w-full text-sm sm:text-base">
                      <Link to="/">Visit</Link>
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-1 sm:left-2" />
          <CarouselNext className="right-1 sm:right-2" />
        </Carousel>

        <div className="text-center mt-6 sm:mt-8">
          <Button asChild className="text-sm sm:text-base">
            <Link to="/">Visit Our Optical Shop</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;