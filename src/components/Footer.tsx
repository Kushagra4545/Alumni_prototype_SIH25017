import { GraduationCap, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AlumniConnect</h3>
                <p className="text-white/70 text-sm">Professional Alumni Network</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Empowering educational institutions to build stronger alumni relationships 
              and unlock growth opportunities through centralized data management.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Platform</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="#api" className="hover:text-white transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Resources</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#help-center" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#webinars" className="hover:text-white transition-colors">Webinars</a></li>
              <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary-light" />
                <span>contact@alumniconnect.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary-light" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary-light" />
                <span>San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 AlumniConnect. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;