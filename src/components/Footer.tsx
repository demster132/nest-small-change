import { Shield, Twitter, Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-secondary" />
              <span className="text-2xl font-bold">SafeNest</span>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Inclusive finance made simple. Building wealth through micro-savings, 
              smart investments, and AI-powered guidance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Micro-Savings Vault</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Pension Nest</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">SafeNest Agent</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Mobile Money Integration</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3 text-background/70">
              <li><a href="#" className="hover:text-secondary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-secondary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/70">
              © 2024 SafeNest. All rights reserved. Building inclusive financial futures.
            </div>
            <div className="flex gap-6 text-sm text-background/70">
              <span>Audited by CertiK</span>
              <span>•</span>
              <span>Insured up to $250K</span>
              <span>•</span>
              <span>SOC 2 Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;