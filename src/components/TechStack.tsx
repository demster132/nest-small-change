import { Code, Shield, Zap, Globe } from "lucide-react";

const TechStack = () => {
  const techFeatures = [
    {
      icon: Shield,
      title: "Polygon & Celo",
      description: "Low-fee blockchain networks optimized for mobile-first financial inclusion",
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Smart Contracts",
      description: "Transparent, automated savings and staking with no middlemen",
      color: "text-secondary"
    },
    {
      icon: Zap,
      title: "AI Agent",
      description: "GPT-powered financial advisor with rule-based automation triggers",
      color: "text-success"
    },
    {
      icon: Globe,
      title: "Mobile Money",
      description: "Seamless integration with M-Pesa and other local payment systems",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Built for
            <span className="text-primary"> Global Scale</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SafeNest leverages cutting-edge blockchain technology and AI to make DeFi accessible 
            to everyone, from tech-savvy users to first-time crypto adopters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {techFeatures.map((tech, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white/80 shadow-soft flex items-center justify-center group-hover:shadow-glow transition-smooth">
                <tech.icon className={`w-10 h-10 ${tech.color}`} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{tech.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Security badges */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">Security & Trust</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="bg-white rounded-lg px-6 py-3 shadow-soft border border-border/50">
              <span className="text-sm font-semibold text-muted-foreground">Audited Smart Contracts</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-soft border border-border/50">
              <span className="text-sm font-semibold text-muted-foreground">Multi-Sig Security</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-soft border border-border/50">
              <span className="text-sm font-semibold text-muted-foreground">Insurance Protected</span>
            </div>
            <div className="bg-white rounded-lg px-6 py-3 shadow-soft border border-border/50">
              <span className="text-sm font-semibold text-muted-foreground">Regulatory Compliant</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;