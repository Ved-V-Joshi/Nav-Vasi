import { useState } from "react";
import { Shield, Phone, MapPin, AlertTriangle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const { toast } = useToast();

  const handleSOS = () => {
    setIsActivated(true);
    
    // Simulate sending SOS
    toast({
      title: "SOS Activated",
      description: "Emergency contacts have been notified with your location",
      className: "bg-trust text-white border-trust",
    });

    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location:", position.coords);
          // In production, this would send to backend
        },
        (error) => {
          console.error("Location error:", error);
        }
      );
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-trust hover:bg-trust-dark text-white shadow-large hover:shadow-glow transition-all"
        size="icon"
      >
        <Shield className="h-8 w-8" />
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-trust">
              <AlertTriangle className="h-5 w-5" />
              Emergency SOS
            </DialogTitle>
          </DialogHeader>

          {!isActivated ? (
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Activate SOS to immediately notify your trusted contacts with your current location.
              </p>
              
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <p className="text-sm text-warning font-medium">
                  This will share your live location with emergency contacts
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  onClick={handleSOS}
                  className="w-full bg-trust hover:bg-trust-dark text-white"
                  size="lg"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Activate SOS
                </Button>
                
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
              </div>

              <div className="pt-4 border-t space-y-2">
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left">
                  <Phone className="h-5 w-5 text-trust" />
                  <div>
                    <p className="font-medium">Call Emergency: 911</p>
                    <p className="text-sm text-muted-foreground">Direct emergency line</p>
                  </div>
                </button>
                
                <button className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors text-left">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Share Location</p>
                    <p className="text-sm text-muted-foreground">Send to trusted contact</p>
                  </div>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                <p className="text-success font-medium flex items-center gap-2">
                  <Shield className="h-5 w-5" />
                  SOS Active - Help is on the way
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Your location has been shared with:</p>
                <ul className="space-y-1">
                  <li className="text-sm">• Emergency Services</li>
                  <li className="text-sm">• Your trusted contacts</li>
                  <li className="text-sm">• Nav-Vasi Safety Team</li>
                </ul>
              </div>

              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  setIsActivated(false);
                  setIsOpen(false);
                }}
              >
                <X className="mr-2 h-4 w-4" />
                Cancel SOS
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SOSButton;