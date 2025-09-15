import { AlertTriangle, MessageCircle, TrendingDown, Database } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Database,
      title: "Scattered Data",
      description: "Alumni information spread across multiple platforms or lost entirely after graduation."
    },
    {
      icon: MessageCircle,
      title: "Limited Communication",
      description: "Reliance on informal WhatsApp groups and outdated mailing lists restricts engagement."
    },
    {
      icon: TrendingDown,
      title: "Missed Opportunities", 
      description: "Institutions miss chances for mentorship, internships, fundraising, and collaborations."
    },
    {
      icon: AlertTriangle,
      title: "Growth Barriers",
      description: "Absence of proper alumni management creates significant gaps in outreach and growth."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Problem We're Solving
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Most educational institutions struggle with fragmented alumni data and engagement systems, 
            limiting their potential for growth and community building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-shadow animate-fade-in border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 bg-destructive/10 rounded-lg w-fit mb-6">
                <problem.icon className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-xl font-semibold text-card-foreground mb-4">
                {problem.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 shadow-medium">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-card-foreground mb-6">
              The Impact of Disconnected Alumni Networks
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-destructive mb-2">70%</div>
                <p className="text-muted-foreground">of alumni lose touch within 2 years</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-destructive mb-2">$2.5B</div>
                <p className="text-muted-foreground">in missed fundraising opportunities annually</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-destructive mb-2">85%</div>
                <p className="text-muted-foreground">of career opportunities go untapped</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;