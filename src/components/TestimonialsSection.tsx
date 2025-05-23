import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Abhishek Sharma",
    testimonial: "The team at Krishnalaya Eye care center was extremely professional and knowledgeable. They took the time to explain my eye health and helped me find the perfect frames for my face shape. Highly recommend!",
    rating: 5,
  },
  {
    id: 2,
    name: "Aniket Yadav",
    testimonial: "I've been going to Krishnalaya Eye care center for over 3 years now. Their comprehensive eye exams are thorough and their selection of frames is outstanding. The staff is always friendly and helpful.",
    rating: 5,
  },
  {
    id: 3,
    name: "Binod Sahani",
    testimonial: "I was nervous about getting contact lenses for the first time, but the optometrist was patient and took extra time teaching me how to put them in. Great experience from start to finish!",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="review" className="py-8 md:py-12 lg:py-16 bg-eyegray-light">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-eyegray-dark mb-3">What Our Patients Say</h2>
          <p className="text-eyegray-dark max-w-xl mx-auto text-sm sm:text-base">
            Don't just take our word for it - hear from our satisfied patients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white">
              <CardContent className="pt-4 sm:pt-5">
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-eyegray-dark mb-3 sm:mb-4 italic text-sm sm:text-base">"{testimonial.testimonial}"</p>
                <p className="font-semibold text-eyegray-dark text-sm sm:text-base">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;