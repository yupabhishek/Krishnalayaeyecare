import {
  Eye,
  Search,
  CheckCircle2,
  Glasses,
  Contact,
  EyeOff,
  EyeIcon,
  ZoomIn,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Contact Lenses",
    description: "Explore our wide range of contact lenses for every need.",
    icon: <Contact className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Eye Exams",
    description: "Routine and comprehensive eye examinations for all ages.",
    icon: <Eye className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Glasses",
    description: "Prescription glasses tailored to your style and needs.",
    icon: <Glasses className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Contact Lens Exams",
    description: "Specialized exams to ensure your lenses fit comfortably.",
    icon: <Search className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Eye Condition Treatment",
    description: "Diagnosis and treatment for various eye conditions.",
    icon: <CheckCircle2 className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Eye Investigations",
    description: "Advanced diagnostic testing for eye health.",
    icon: <ZoomIn className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Low Vision",
    description: "Support and solutions for individuals with low vision.",
    icon: <EyeOff className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Routine Eye Exams",
    description: "Keep your eyes healthy with regular checkups.",
    icon: <ShieldCheck className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Glaucoma",
    description: "Screening and treatment plans for glaucoma management.",
    icon: <AlertTriangle className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Myopia",
    description: "Manage and correct nearsightedness with expert care.",
    icon: <EyeIcon className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  },
  {
    title: "Sales and Fitting of Glasses",
    description: "Get the perfect fit and style with our eyewear experts.",
    icon: <Glasses className="h-8 w-8 sm:h-10 sm:w-10 text-eyeblue" />
  }
];

export default function OurServices() {
  const [showAll, setShowAll] = useState(false);
  const visibleServices = showAll ? services : services.slice(0, 3);

  return (
    <section id="services" className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-2 sm:px-4 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Our Services</h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Discover a range of services tailored to keep your vision clear and your eyes healthy.
        </p>

        <motion.div
          layout
          className="grid gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="w-full"
              >
                <Card className="hover:shadow-lg transition duration-300 ease-in-out h-full">
                  <CardContent className="flex flex-col items-center justify-center p-4 sm:p-5 space-y-3">
                    {service.icon}
                    <h3 className="text-base sm:text-lg font-semibold">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground text-center">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Button onClick={() => setShowAll(!showAll)} className="mt-4 text-sm sm:text-base">
          {showAll ? "Show Less" : "See All Services"}
        </Button>
      </div>
    </section>
  );
}