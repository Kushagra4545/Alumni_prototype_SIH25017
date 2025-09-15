import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Database, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-alumni.jpg";

const HeroSection = () => {
  return (
    <section className="bg-gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              🎓 Transform Alumni Engagement
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Centralized Alumni 
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                {" "}Data Management
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              Bridge the gap between educational institutions and their alumni. 
              Build lasting relationships, enhance engagement, and unlock growth opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Users className="h-8 w-8 text-white/80" />
                </div>
                <div className="text-2xl font-bold mb-1">50K+</div>
                <div className="text-sm text-white/70">Alumni Connected</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <Database className="h-8 w-8 text-white/80" />
                </div>
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-sm text-white/70">Institutions</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="h-8 w-8 text-white/80" />
                </div>
                <div className="text-2xl font-bold mb-1">85%</div>
                <div className="text-sm text-white/70">Engagement Increase</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in lg:animate-fade-in">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Alumni networking and data management platform" 
                className="rounded-2xl shadow-strong w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;