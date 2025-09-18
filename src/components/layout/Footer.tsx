import { Link } from "react-router-dom";
import { Globe, Heart, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Globe className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg">Nav-Vasi</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Building bridges, creating connections. Your trusted community hub for a new beginning.
            </p>
            <div className="flex items-center mt-4 text-sm text-accent">
              <Heart className="h-4 w-4 mr-1" />
              <span>Made with care for migrants worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/community" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Forum
                </Link>
              </li>
              <li>
                <Link to="/map" className="text-muted-foreground hover:text-primary transition-colors">
                  Local Map
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-muted-foreground hover:text-primary transition-colors">
                  Safety Center
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-muted-foreground hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/report" className="text-muted-foreground hover:text-primary transition-colors">
                  Report Fraud
                </Link>
              </li>
              <li>
                <Link to="/guidelines" className="text-muted-foreground hover:text-primary transition-colors">
                  Community Guidelines
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Emergency Contacts</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-muted-foreground">
                <Phone className="h-4 w-4 mr-2 text-trust" />
                <span className="text-sm">911 (Emergency)</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <Mail className="h-4 w-4 mr-2 text-trust" />
                <span className="text-sm">help@nav-vasi.org</span>
              </li>
              <li className="flex items-center text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2 text-trust" />
                <span className="text-sm">Available Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © 2024 Nav-Vasi. All rights reserved. Built with trust and inclusivity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;