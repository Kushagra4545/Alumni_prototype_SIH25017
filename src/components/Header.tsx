import { Button } from "@/components/ui/button";
import { GraduationCap, Users, TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-soft border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <GraduationCap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">AlumniConnect</h1>
              <p className="text-xs text-muted-foreground">Professional Alumni Network</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors font-medium">
              Benefits
            </a>
            <a href="#stakeholders" className="text-foreground hover:text-primary transition-colors font-medium">
              Stakeholders
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex">
              Login
            </Button>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;