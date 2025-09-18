import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Phone, MapPin, AlertTriangle, Users, FileText, Heart } from "lucide-react";
import SOSButton from "@/components/safety/SOSButton";

const Safety = () => {
  const emergencyContacts = [
    { name: "Emergency Services", number: "911", type: "emergency" },
    { name: "Crisis Hotline", number: "1-800-273-8255", type: "crisis" },
    { name: "Domestic Violence", number: "1-800-799-7233", type: "support" },
    { name: "Nav-Vasi Support", number: "1-888-NAV-VASI", type: "community" },
  ];

  const safetyTips = [
    {
      icon: MapPin,
      title: "Share Your Location",
      description: "Always share your live location with trusted contacts when traveling alone",
    },
    {
      icon: Users,
      title: "Build Your Network",
      description: "Connect with verified community members in your area for support",
    },
    {
      icon: FileText,
      title: "Document Everything",
      description: "Keep copies of important documents in multiple secure locations",
    },
    {
      icon: AlertTriangle,
      title: "Trust Your Instincts",
      description: "If something feels wrong, remove yourself from the situation immediately",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Safety Center</h1>
          <p className="text-lg text-muted-foreground">
            Your safety is our priority. Access emergency resources and support anytime.
          </p>
        </div>

        {/* Emergency Alert */}
        <Card className="bg-gradient-trust text-white p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Shield className="h-8 w-8" />
                Emergency SOS System
              </h2>
              <p className="opacity-90">
                Instantly alert your trusted contacts and emergency services with your location
              </p>
            </div>
            <Button size="lg" className="bg-white text-trust hover:bg-white/90">
              Setup Emergency Contacts
            </Button>
          </div>
        </Card>

        {/* Emergency Contacts */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Phone className="h-5 w-5 text-trust" />
              Emergency Contacts
            </h3>
            <div className="space-y-3">
              {emergencyContacts.map((contact) => (
                <div
                  key={contact.name}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors"
                >
                  <div>
                    <p className="font-medium text-foreground">{contact.name}</p>
                    <p className="text-sm text-muted-foreground">{contact.type}</p>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4 mr-2" />
                    {contact.number}
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              Safe Routes
            </h3>
            <p className="text-muted-foreground mb-4">
              Get the safest route recommendations based on time of day and community reports
            </p>
            <div className="space-y-3">
              <Button className="w-full" variant="outline">
                Plan Safe Route
              </Button>
              <Button className="w-full" variant="outline">
                Share My Journey
              </Button>
              <Button className="w-full" variant="outline">
                Find Safe Spaces Nearby
              </Button>
            </div>
          </Card>
        </div>

        {/* Safety Tips */}
        <div className="mb-8">
          <h3 className="font-semibold text-xl mb-6">Safety Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {safetyTips.map((tip) => {
              const Icon = tip.icon;
              return (
                <Card key={tip.title} className="p-6 hover:shadow-medium transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">{tip.title}</h4>
                      <p className="text-muted-foreground">{tip.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Women's Safety Section */}
        <Card className="bg-gradient-warm p-8 text-white">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="h-8 w-8" />
            <h3 className="text-2xl font-bold">Women's Safety Network</h3>
          </div>
          <p className="mb-6 opacity-90">
            Connect with other women in your community for support, safe companionship, and shared resources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-accent hover:bg-white/90">
              Join Women's Network
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Find a Buddy
            </Button>
          </div>
        </Card>
      </div>

      {/* Floating SOS Button */}
      <SOSButton />
    </div>
  );
};

export default Safety;