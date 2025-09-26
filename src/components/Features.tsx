import { Button } from "@/components/ui/button";
import { PiggyBank, Shield, Bot, Smartphone, TrendingUp, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: PiggyBank,
      title: "Micro-Savings Vault",
      description: "Start with as little as $0.10. Automatically convert deposits to stablecoins and deploy to low-risk DeFi yield pools for steady growth.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      benefit: "Turn spare change into meaningful savings"
    },
    {
      icon: Shield,
      title: "Pension Nest",
      description: "Lock a percentage of each deposit into long-term staking pools. Smart contracts ensure transparency with no middlemen taking cuts.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      benefit: "Secure your retirement, one deposit at a time"
    },
    {
      icon: Bot,
      title: "SafeNest Agent",
      description: "Your AI financial guide analyzes habits, suggests goals, sends reminders, and auto-rebalances funds to the safest yield strategies.",
      color: "text-success",
      bgColor: "bg-success/10",
      benefit: "Personal finance advisor in your pocket"
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Users Served", subtext: "Across 12 countries" },
    { icon: TrendingUp, value: "8.5%", label: "Average APY", subtext: "On stablecoin pools" },
    { icon: Smartphone, value: "$0.10", label: "Minimum Deposit", subtext: "Start saving today" },
    { icon: Shield, value: "100%", label: "Transparent", subtext: "No hidden fees" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats section */}
        <div className="text-center mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Features heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Three Pillars of
            <span className="text-primary"> Financial Freedom</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SafeNest combines the power of DeFi with the simplicity of traditional savings, 
            making financial inclusion accessible to everyone, everywhere.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth border border-border/50 hover:border-primary/20 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-bounce`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Benefit */}
                <div className="bg-gradient-card rounded-lg p-4 border border-border/30">
                  <p className="text-sm font-semibold text-primary">
                    {feature.benefit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use case example */}
        <div className="bg-gradient-card rounded-2xl p-8 md:p-12 shadow-card border border-border/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Real Impact: <span className="text-primary">Maria's Story</span>
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <span className="font-semibold text-secondary">Maria</span>, a market vendor in Nairobi, 
                  saves <span className="font-semibold">KSh 50 per day</span> using SafeNest.
                </p>
                <p>
                  The SafeNest Agent suggests a <span className="font-semibold text-primary">70/30 split</span> between 
                  micro-savings and pension staking.
                </p>
                <p>
                  Weekly report: <span className="font-semibold text-success">"At this pace, your school-fee goal 
                  will be ready in 6 months."</span>
                </p>
              </div>
            </div>
            
            <div className="bg-white/50 rounded-xl p-6 border border-primary/20">
              <h4 className="font-semibold text-foreground mb-4">Weekly Progress</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Micro-Savings</span>
                  <span className="font-semibold text-primary">KSh 245</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Pension Nest</span>
                  <span className="font-semibold text-secondary">KSh 105</span>
                </div>
                <div className="flex justify-between items-center border-t pt-2">
                  <span className="text-sm font-semibold text-foreground">Yield Earned</span>
                  <span className="font-semibold text-success">+KSh 12.50</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="hero" size="lg">
              Start Your SafeNest Journey
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;