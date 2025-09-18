import { ArrowRight, Shield, Users, MapPin, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Welcome to Your New{" "}
            <span className="text-primary bg-gradient-primary bg-clip-text text-transparent">
              Community
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Nav-Vasi connects migrants with trusted resources, genuine support, and a caring community. 
            Build your new life with confidence and safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-primary-foreground">
              Join Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/safety">
                <Shield className="mr-2 h-5 w-5 text-trust" />
                Safety First
              </Link>
            </Button>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Trusted Community</h3>
              <p className="text-sm text-muted-foreground">
                Connect with verified members who understand your journey
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow">
              <MapPin className="h-10 w-10 text-trust mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Local Insights</h3>
              <p className="text-sm text-muted-foreground">
                Discover hidden gems and trusted local services
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow">
              <Shield className="h-10 w-10 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Fraud Protection</h3>
              <p className="text-sm text-muted-foreground">
                Community-verified prices and scam prevention
              </p>
            </div>
            
            <div className="bg-card p-6 rounded-lg shadow-soft hover:shadow-medium transition-shadow">
              <TrendingUp className="h-10 w-10 text-success mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Growth Support</h3>
              <p className="text-sm text-muted-foreground">
                Resources to help you thrive in your new home
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;