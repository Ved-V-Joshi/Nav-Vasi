import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  GraduationCap, 
  Heart, 
  Home, 
  Briefcase, 
  Globe, 
  Phone, 
  Book,
  ArrowRight 
} from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Legal Documents",
      description: "Immigration papers, work permits, legal aid",
      resources: 12,
      color: "text-trust",
      bgColor: "bg-trust/10",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Language classes, skill training, certifications",
      resources: 24,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Free clinics, insurance guidance, mental health",
      resources: 18,
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Home,
      title: "Housing",
      description: "Tenant rights, affordable housing, roommate finding",
      resources: 15,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
    {
      icon: Briefcase,
      title: "Employment",
      description: "Job boards, resume help, interview prep",
      resources: 21,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      icon: Globe,
      title: "Cultural",
      description: "Community centers, religious places, cultural events",
      resources: 9,
      color: "text-info",
      bgColor: "bg-info/10",
    },
  ];

  const featuredResources = [
    {
      title: "Free English Classes",
      provider: "Community Learning Center",
      schedule: "Tue & Thu, 6-8 PM",
      type: "Education",
      isFree: true,
    },
    {
      title: "Legal Aid Consultation",
      provider: "Immigrant Rights Center",
      schedule: "Mon-Fri, 9 AM-5 PM",
      type: "Legal",
      isFree: true,
    },
    {
      title: "Job Fair for Newcomers",
      provider: "City Employment Office",
      schedule: "March 15, 10 AM-4 PM",
      type: "Employment",
      isFree: true,
    },
  ];

  const quickLinks = [
    { name: "Emergency Food Banks", icon: Heart, link: "#" },
    { name: "Free Health Clinics", icon: Heart, link: "#" },
    { name: "Language Exchange Groups", icon: Globe, link: "#" },
    { name: "Tenant Rights Guide", icon: Home, link: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Resources Hub</h1>
          <p className="text-lg text-muted-foreground">
            Essential resources and services to help you thrive in your new home
          </p>
        </div>

        {/* Resource Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {resourceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="p-6 hover:shadow-medium transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${category.bgColor}`}>
                    <Icon className={`h-6 w-6 ${category.color}`} />
                  </div>
                  <Badge variant="secondary">{category.resources} resources</Badge>
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <Button variant="ghost" className="w-full justify-between">
                  Explore
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* Featured Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured This Week</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredResources.map((resource) => (
              <Card key={resource.title} className="p-6 border-2 border-primary/20">
                <div className="flex items-start justify-between mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {resource.type}
                  </Badge>
                  {resource.isFree && (
                    <Badge className="bg-success/10 text-success border-success/20">
                      FREE
                    </Badge>
                  )}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{resource.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{resource.provider}</p>
                <p className="text-sm text-primary font-medium">{resource.schedule}</p>
                <Button className="w-full mt-4" variant="outline">
                  Learn More
                </Button>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <Card className="p-8 bg-gradient-hero">
          <h3 className="text-xl font-semibold text-foreground mb-6">Quick Access</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Button
                  key={link.name}
                  variant="outline"
                  className="justify-start hover:bg-primary/5"
                >
                  <Icon className="h-4 w-4 mr-2 text-primary" />
                  {link.name}
                </Button>
              );
            })}
          </div>
        </Card>

        {/* Download Section */}
        <Card className="mt-8 p-8 bg-muted">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
                <Book className="h-6 w-6 text-primary" />
                Newcomer's Guide
              </h3>
              <p className="text-muted-foreground">
                Download our comprehensive guide with everything you need to know
              </p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Get App
              </Button>
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Resources;