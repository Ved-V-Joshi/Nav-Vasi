import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, AlertTriangle, Check, Plus, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PriceWatch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  // Mock price data
  const priceData = [
    {
      id: 1,
      item: "Rice (1kg)",
      fairPrice: "$2.99",
      avgPrice: "$3.50",
      highPrice: "$6.00",
      trend: "stable",
      reports: 45,
      lastUpdated: "2 hours ago",
      stores: ["Fresh Market", "Local Mart"],
    },
    {
      id: 2,
      item: "Monthly Bus Pass",
      fairPrice: "$75",
      avgPrice: "$90",
      highPrice: "$120",
      trend: "down",
      reports: 128,
      lastUpdated: "1 day ago",
      stores: ["City Transit Office"],
    },
    {
      id: 3,
      item: "Phone Plan (Unlimited)",
      fairPrice: "$35",
      avgPrice: "$50",
      highPrice: "$80",
      trend: "up",
      reports: 67,
      lastUpdated: "3 hours ago",
      stores: ["TelCo Store", "Mobile Hub"],
    },
    {
      id: 4,
      item: "Gym Membership",
      fairPrice: "$25",
      avgPrice: "$45",
      highPrice: "$75",
      trend: "stable",
      reports: 34,
      lastUpdated: "5 hours ago",
      stores: ["FitLife", "Community Center"],
    },
  ];

  const handleReportPrice = () => {
    toast({
      title: "Report New Price",
      description: "Please sign in to report prices and help the community",
    });
  };

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="h-4 w-4 text-warning" />;
    if (trend === "down") return <TrendingDown className="h-4 w-4 text-success" />;
    return <span className="text-muted-foreground">—</span>;
  };

  const filteredData = priceData.filter((item) =>
    item.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Price Watch</h1>
          <p className="text-lg text-muted-foreground">
            Community-verified prices to help you avoid overcharging
          </p>
        </div>

        {/* Alert Banner */}
        <Card className="bg-warning/10 border-warning/20 p-6 mb-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">Help Fight Price Fraud</h3>
              <p className="text-muted-foreground mb-4">
                Report unfair prices you encounter to protect other community members from being overcharged.
              </p>
              <Button onClick={handleReportPrice}>
                <Plus className="mr-2 h-4 w-4" />
                Report a Price
              </Button>
            </div>
          </div>
        </Card>

        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
          <Input
            placeholder="Search for items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Price Grid */}
        <div className="grid gap-6">
          {filteredData.map((item) => (
            <Card key={item.id} className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.item}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{item.reports} reports</span>
                    <span>•</span>
                    <span>Updated {item.lastUpdated}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      Trend: {getTrendIcon(item.trend)}
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Report Price
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-success">Fair Price</span>
                    <Check className="h-4 w-4 text-success" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{item.fairPrice}</p>
                  <p className="text-xs text-muted-foreground mt-1">Best value found</p>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Average</span>
                  </div>
                  <p className="text-2xl font-bold text-foreground">{item.avgPrice}</p>
                  <p className="text-xs text-muted-foreground mt-1">Market average</p>
                </div>

                <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-warning">Overpriced</span>
                    <AlertTriangle className="h-4 w-4 text-warning" />
                  </div>
                  <p className="text-2xl font-bold text-foreground">{item.highPrice}</p>
                  <p className="text-xs text-muted-foreground mt-1">Avoid this price</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Available at:</span>
                {item.stores.map((store) => (
                  <Badge key={store} variant="secondary">
                    {store}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceWatch;