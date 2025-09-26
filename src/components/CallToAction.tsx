import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, MessageCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 right-24 w-40 h-40 bg-white/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-24 left-16 w-56 h-56 bg-secondary/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your
            <span className="block text-secondary">Financial Future?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto">
            Join thousands of users already building wealth with SafeNest. 
            Start with just $0.10 and watch your savings grow automatically.
          </p>

          {/* Main CTA */}
          <div className="mb-12">
            <Button variant="secondary" size="lg" className="text-xl px-12 py-6 h-auto group">
              Launch SafeNest MVP
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Secondary actions */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <Mail className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">Get Early Access</h3>
              <p className="text-primary-foreground/70 mb-4">Be among the first to experience SafeNest when we launch.</p>
              <Button variant="outline" className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30">
                Join Waitlist
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
              <MessageCircle className="w-8 h-8 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary-foreground mb-3">Partner With Us</h3>
              <p className="text-primary-foreground/70 mb-4">Bring SafeNest to your community or integrate our API.</p>
              <Button variant="outline" className="bg-white/20 border-white/30 text-primary-foreground hover:bg-white/30">
                Contact Sales
              </Button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-secondary">50K+</div>
                <div className="text-sm text-primary-foreground/70">Early Adopters</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">12</div>
                <div className="text-sm text-primary-foreground/70">Countries</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">$2M+</div>
                <div className="text-sm text-primary-foreground/70">Saved Collectively</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">99.9%</div>
                <div className="text-sm text-primary-foreground/70">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;