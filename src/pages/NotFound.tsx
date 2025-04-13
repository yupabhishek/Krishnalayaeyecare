
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-eyegray-light py-16">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-5xl font-bold mb-4 text-eyegray-dark">404</h1>
          <p className="text-xl text-eyegray-dark mb-6">
            Oops! We couldn't find the page you're looking for.
          </p>
          <p className="mb-8 text-eyegray">
            The page may have been moved, deleted, or maybe you mistyped the URL.
          </p>
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
