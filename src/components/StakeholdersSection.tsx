import { GraduationCap, Users, Building, Briefcase, UserCheck } from "lucide-react";

const StakeholdersSection = () => {
  const stakeholders = [
    {
      icon: GraduationCap,
      title: "Alumni",
      description: "Stay connected with your alma mater and fellow graduates.",
      benefits: [
        "Access exclusive networking opportunities",
        "Receive career development resources",
        "Participate in mentorship programs",
        "Stay updated on institutional news and events"
      ],
      color: "bg-primary"
    },
    {
      icon: Users,
      title: "Current Students",
      description: "Benefit from alumni expertise and career guidance.",
      benefits: [
        "Connect with industry professionals",
        "Access internship and job opportunities", 
        "Receive mentorship from experienced alumni",
        "Learn from successful career paths"
      ],
      color: "bg-secondary"
    },
    {
      icon: Building,
      title: "Institution Administrators",
      description: "Streamline alumni relations and boost engagement.",
      benefits: [
        "Centralized data management system",
        "Improved fundraising capabilities",
        "Enhanced event planning and execution",
        "Better alumni engagement analytics"
      ],
      color: "bg-accent"
    },
    {
      icon: UserCheck,
      title: "Faculty & Staff",
      description: "Leverage alumni networks for academic and research collaboration.",
      benefits: [
        "Access to industry expertise",
        "Research collaboration opportunities",
        "Guest speaking engagements",
        "Professional development connections"
      ],
      color: "bg-success"
    },
    {
      icon: Briefcase,
      title: "Employers & Recruiters",
      description: "Connect with qualified talent from reputable institutions.",
      benefits: [
        "Access to pre-screened candidates",
        "Direct recruitment from alumni networks",
        "Build relationships with educational institutions",
        "Participate in career fairs and networking events"
      ],
      color: "bg-primary-light"
    }
  ];

  return (
    <section id="stakeholders" className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stakeholders & Beneficiaries
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our platform creates value for everyone in the alumni ecosystem, 
            fostering connections that benefit the entire community.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {stakeholders.map((stakeholder, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:shadow-medium transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`p-4 ${stakeholder.color} rounded-xl w-fit mb-6`}>
                <stakeholder.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {stakeholder.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {stakeholder.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-medium text-card-foreground text-sm uppercase tracking-wide">
                  Key Benefits
                </h4>
                <ul className="space-y-2">
                  {stakeholder.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Building Stronger Communities Together
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            When alumni, students, institutions, and industry work together, 
            everyone succeeds. Our platform makes these connections possible.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <p className="text-white/80">Institutions Connected</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <p className="text-white/80">Active Alumni</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15K+</div>
              <p className="text-white/80">Successful Connections</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholdersSection;