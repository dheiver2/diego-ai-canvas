
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-6">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Page Not <span className="gradient-text">Found</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-12 leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="btn-primary">
              <Link to="/">
                <Home className="mr-2" size={20} />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="javascript:history.back()">
                <ArrowLeft className="mr-2" size={20} />
                Go Back
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
