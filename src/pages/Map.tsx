import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Store, Coffee, Heart, Home, Briefcase, Search, Plus } from "lucide-react";

const Map = () => {
  const [searchLocation, setSearchLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Mock locations data
  const locations = [
    {
      id: 1,
      name: "Fresh Market",
      category: "grocery",
      type: "Grocery Store",
      address: "123 5th Street",
      rating: 4.8,
      verified: true,
      description: "Fair prices, fresh produce",
      priceLevel: "$",
    },
    {
      id: 2,
      name: "Community Health Center",
      category: "health",
      type: "Healthcare",
      address: "456 Main Ave",
      rating: 4.6,
      verified: true,
      description: "Free consultations for migrants",
      priceLevel: "Free",
    },
    {
      id: 3,
      name: "La Casa Café",
      category: "restaurant",
      type: "Restaurant",
      address: "789 Park Blvd",
      rating: 4.9,
      verified: false,
      description: "Authentic home-style cooking",
      priceLevel: "$$",
    },
    {
      id: 4,
      name: "City Employment Center",
      category: "services",
      type: "Services",
      address: "321 Work St",
      rating: 4.5,
      verified: true,
      description: "Job placement assistance",
      priceLevel: "Free",
    },
  ];

  const categories = [
    { id: "all", label: "All", icon: MapPin },
    { id: "grocery", label: "Groceries", icon: Store },
    { id: "restaurant", label: "Food", icon: Coffee },
    { id: "health", label: "Healthcare", icon: Heart },
    { id: "housing", label: "Housing", icon: Home },
    { id: "services", label: "Services", icon: Briefcase },
  ];

  const filteredLocations = locations.filter(
    (loc) => selectedCategory === "all" || loc.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Community Map</h1>
          <p className="text-lg text-muted-foreground">
            Discover trusted local services and hidden gems verified by our community
          </p>
        </div>

        {/* Search Bar */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              placeholder="Search for places..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Location
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat.id)}
                className="flex-shrink-0"
              >
                <Icon className="h-4 w-4 mr-2" />
                {cat.label}
              </Button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <Card className="h-[600px] flex items-center justify-center bg-muted">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-lg font-medium text-muted-foreground mb-2">
                  Interactive Map
                </p>
                <p className="text-sm text-muted-foreground max-w-md">
                  To display the map, please connect to Supabase and add your Mapbox API key
                </p>
                <Button className="mt-4" variant="outline">
                  Setup Map Integration
                </Button>
              </div>
            </Card>
          </div>

          {/* Location List */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg mb-4">Nearby Places</h3>
            {filteredLocations.map((location) => (
              <Card key={location.id} className="p-4 hover:shadow-medium transition-shadow cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-foreground">{location.name}</h4>
                    <p className="text-sm text-muted-foreground">{location.type}</p>
                  </div>
                  {location.verified && (
                    <Badge className="bg-success/10 text-success border-success/20">
                      Verified
                    </Badge>
                  )}
                </div>
                
                <p className="text-sm text-muted-foreground mb-2">
                  <MapPin className="inline h-3 w-3 mr-1" />
                  {location.address}
                </p>
                
                <p className="text-sm mb-3">{location.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Price:</span>
                    <Badge variant="outline">{location.priceLevel}</Badge>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-warning">★</span>
                    <span className="text-sm font-medium">{location.rating}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;