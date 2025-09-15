import { Shield, Users, Calendar, MessageSquare, BarChart3, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const FeaturesSection = () => {
  const features = [
    {
      icon: Users,
      title: "Centralized Alumni Database",
      description: "Comprehensive platform to store, update, and manage all alumni information in one secure location.",
      benefits: ["Real-time updates", "Advanced search", "Data validation"]
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Streamlined communication tools for announcements, newsletters, and direct messaging.",
      benefits: ["Bulk messaging", "Event notifications", "Discussion forums"]
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Plan, promote, and track alumni events with integrated RSVP and attendance tracking.",
      benefits: ["Event calendar", "RSVP tracking", "Automated reminders"]
    },
    {
      icon: Shield,
      title: "Career Tracking",
      description: "Monitor alumni career progression, achievements, and professional milestones securely.",
      benefits: ["Career progression", "Achievement tracking", "Industry insights"]
    },
    {
      icon: Heart,
      title: "Mentorship Matching",
      description: "Connect alumni with current students and each other for mentorship and collaboration.",
      benefits: ["Smart matching", "Mentorship tracking", "Success metrics"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive reporting and analytics to track engagement and measure success.",
      benefits: ["Engagement metrics", "ROI tracking", "Custom reports"]
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Powerful Features for Alumni Success
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Everything you need to build strong, lasting relationships with your alumni community 
            and unlock the full potential of your network.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-gradient-primary rounded-lg w-fit mb-6 group-hover:animate-glow">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-4 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {feature.description}
              </p>

              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="h-1.5 w-1.5 bg-primary rounded-full"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-subtle p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Alumni Network?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of institutions already using our platform to strengthen alumni relationships 
            and drive institutional growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;