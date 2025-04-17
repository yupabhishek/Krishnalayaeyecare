import { useState } from 'react';
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { toast } from 'sonner';

const AppointmentSection = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
    },
  });

  const onSubmit = async (data: any) => {
    if (!date) {
      toast.error("Please select a date for your appointment");
      return;
    }

    const payload = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      service: data.service,
      date: date.toDateString(),
      _subject: "New Appointment Request",
      _replyto: data.email,
    };

    try {
      const response = await fetch("https://formspree.io/f/xanevzyb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Appointment request submitted!");
        form.reset();
        setDate(undefined);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Formspree error:", error);
      toast.error("Submission failed. Please try later.");
    }
  };

  return (
    <section id="appointment" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-bold text-eyegray-dark mb-3 text-center">
              Book Your Eye Appointment
            </h2>
            <p className="text-eyegray-dark mb-4 text-sm sm:text-base">
              Schedule your comprehensive eye exam or consultation with our experienced optometrists. 
              We're dedicated to providing personalized eye care for all your vision needs.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <div className="rounded-full bg-eyeblue-light p-1 mr-2 mt-0.5">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 text-eyeblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-sm sm:text-base">Convenient online scheduling</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-eyeblue-light p-1 mr-2 mt-0.5">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 text-eyeblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-sm sm:text-base">Flexible appointment times</span>
              </li>
              <li className="flex items-start">
                <div className="rounded-full bg-eyeblue-light p-1 mr-2 mt-0.5">
                  <svg className="h-3 w-3 sm:h-4 sm:w-4 text-eyeblue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <span className="text-sm sm:text-base">Same-day appointments available for urgent care</span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-4 sm:p-5">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                <FormField
                  control={form.control}
                  name="name"
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="john doe" {...field} className="text-sm sm:text-base" />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  rules={{
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Email</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="john@example.com" {...field} className="text-sm sm:text-base" />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+977 123 4567890" {...field} className="text-sm sm:text-base" />
                      </FormControl>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  rules={{ required: "Please select a service" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm sm:text-base">Service</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="text-sm sm:text-base">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="eye-exam">Comprehensive Eye Exam</SelectItem>
                          <SelectItem value="contact-lens">Contact Lens Fitting</SelectItem>
                          <SelectItem value="glasses">Glasses Consultation</SelectItem>
                          <SelectItem value="emergency">Emergency Eye Care</SelectItem>
                          <SelectItem value="follow-up">Follow-Up Visit</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs sm:text-sm" />
                    </FormItem>
                  )}
                />

                <FormItem className="flex flex-col">
                  <FormLabel className="text-sm sm:text-base">Preferred Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal text-sm sm:text-base",
                            !date && "text-muted-foreground"
                          )}
                        >
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) => {
                          const today = new Date();
                          return date < today || date > new Date(today.setMonth(today.getMonth() + 3));
                        }}
                        className={cn("p-2 sm:p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                  {!date && form.formState.isSubmitted && (
                    <p className="text-xs sm:text-sm font-medium text-destructive mt-1">
                      Please select a date
                    </p>
                  )}
                </FormItem>

                <Button type="submit" className="w-full text-sm sm:text-base">Book Appointment</Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;