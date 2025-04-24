
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmail("");
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
    }, 1000);
  };
  
  return (
    <section className="py-16 bg-farm-green-dark text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Stay Updated with Seasonal Harvests
          </h2>
          <p className="text-farm-green-light mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for seasonal updates, new product arrivals, farmer stories, and exclusive offers.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-white focus:ring-white"
            />
            <Button 
              type="submit" 
              className="bg-white hover:bg-farm-cream text-farm-green-dark font-medium"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <p className="text-xs text-farm-green-light/80 mt-4">
            We respect your privacy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
