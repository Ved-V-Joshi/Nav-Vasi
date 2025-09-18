import HeroSection from "@/components/home/HeroSection";
import ForumCard, { ForumPost } from "@/components/community/ForumCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, AlertCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  // Mock data for demonstration
  const recentPosts: ForumPost[] = [
    {
      id: "1",
      title: "Looking for a roommate in downtown area",
      author: "Maria Chen",
      category: "Housing",
      content: "I'm searching for a trustworthy roommate to share a 2-bedroom apartment downtown. Rent is $800/month...",
      likes: 24,
      replies: 8,
      timestamp: "2 hours ago",
      tags: ["roommate", "downtown"],
      verified: true,
    },
    {
      id: "2",
      title: "Found affordable grocery store with fair prices",
      author: "Ahmed Hassan",
      category: "Resources",
      content: "Just discovered Fresh Market on 5th Street. They have great prices and don't overcharge. Rice is $2.99/kg...",
      likes: 45,
      replies: 12,
      timestamp: "5 hours ago",
      tags: ["groceries", "prices"],
      verified: false,
    },
    {
      id: "3",
      title: "Job opportunity at local restaurant",
      author: "Sofia Rodriguez",
      category: "Jobs",
      content: "My workplace is hiring servers and kitchen staff. No experience needed, training provided. Apply at...",
      likes: 67,
      replies: 23,
      timestamp: "1 day ago",
      tags: ["jobs", "restaurant"],
      verified: true,
    },
  ];

  const priceAlerts = [
    { item: "Monthly Bus Pass", reportedPrice: "$75", avgPrice: "$90", savings: "$15" },
    { item: "Phone Plan (Unlimited)", reportedPrice: "$35", avgPrice: "$50", savings: "$15" },
    { item: "Gym Membership", reportedPrice: "$25", avgPrice: "$45", savings: "$20" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Recent Community Activity */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">Community Forum</h2>
            <p className="text-muted-foreground">Connect with your community</p>
          </div>
          <Button variant="outline" asChild>
            <Link to="/community">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6">
          {recentPosts.map((post) => (
            <ForumCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Price Watch Alert */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Price Watch</h2>
              <p className="text-muted-foreground">Community-verified fair prices</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/price-watch">
                Report Prices
                <TrendingUp className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {priceAlerts.map((alert) => (
              <Card key={alert.item} className="p-6 bg-card hover:shadow-medium transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-foreground">{alert.item}</h3>
                  <Badge className="bg-success/10 text-success border-success/20">
                    Save {alert.savings}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Community Price:</span>
                    <span className="font-medium text-success">{alert.reportedPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Average Price:</span>
                    <span className="text-muted-foreground line-through">{alert.avgPrice}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Notice */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="bg-gradient-trust text-white p-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              <AlertCircle className="h-12 w-12" />
              <div>
                <h3 className="text-xl font-bold mb-1">Stay Safe, Stay Connected</h3>
                <p className="opacity-90">Access emergency services and safety resources instantly</p>
              </div>
            </div>
            <Button size="lg" className="bg-white text-trust hover:bg-white/90">
              <Link to="/safety" className="flex items-center">
                Safety Center
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* Community Stats */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">2,847</div>
              <div className="text-muted-foreground">Active Members</div>
            </div>
            <div>
              <TrendingUp className="h-10 w-10 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">$1,250</div>
              <div className="text-muted-foreground">Avg. Saved Monthly</div>
            </div>
            <div>
              <AlertCircle className="h-10 w-10 text-warning mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">156</div>
              <div className="text-muted-foreground">Scams Prevented</div>
            </div>
            <div>
              <MapPin className="h-10 w-10 text-trust mx-auto mb-3" />
              <div className="text-3xl font-bold text-foreground">423</div>
              <div className="text-muted-foreground">Verified Locations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Fix Badge import
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";

export default Home;