import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, TrendingUp, Bot } from "lucide-react";
import heroImage from "@/assets/hero-safenest.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 right-16 w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 mb-6 justify-center lg:justify-start">
              <Shield className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-semibold text-lg">SafeNest</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Inclusive Finance
              <span className="block text-secondary">Made Simple</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl">
              Save, invest, and plan for retirement using tiny everyday deposits. 
              <span className="text-secondary font-semibold"> Start with just $0.10</span> and let DeFi work for you.
            </p>
            
            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <TrendingUp className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-primary-foreground font-medium">Micro-Savings Vault</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Shield className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-primary-foreground font-medium">Pension Nest</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                <Bot className="w-6 h-6 text-secondary mx-auto mb-2" />
                <p className="text-primary-foreground font-medium">AI Agent</p>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="secondary" size="lg" className="group">
                Start Saving Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-primary-foreground hover:bg-white/20">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Hero image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroImage}
                alt="SafeNest mobile app interface showing savings progress and financial planning"
                className="w-full max-w-lg mx-auto rounded-2xl shadow-glow"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 -right-8 bg-secondary/20 backdrop-blur-sm rounded-full p-4 animate-pulse">
              <TrendingUp className="w-8 h-8 text-secondary" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-success/20 backdrop-blur-sm rounded-full p-4 animate-pulse delay-700">
              <Shield className="w-8 h-8 text-success" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;