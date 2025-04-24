
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-farm-green-light/10 overflow-hidden">
      <div className="hero-pattern">
        <div className="container mx-auto px-4 py-16 md:py-24 md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0 relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-farm-green-dark mb-6">
              From Farm to Table: Support Local Farmers
            </h1>
            <p className="text-lg md:text-xl text-farm-green mb-8">
              Buy directly from local farmers. Get fresh, organic produce and support rural communities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products">
                <Button size="lg" className="bg-farm-green hover:bg-farm-green-dark text-white">
                  Shop Now
                </Button>
              </Link>
              <Link to="/farmers">
                <Button size="lg" variant="outline" className="border-farm-green text-farm-green hover:bg-farm-green-light/10">
                  Meet Our Farmers
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1595923533867-9a5b8829c7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Farmer with fresh produce" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-farm-cream rounded-lg shadow-lg p-4 max-w-[200px]">
              <p className="font-medium text-farm-green-dark">
                "I'm proud that my vegetables reach customers directly, without middlemen."
              </p>
              <p className="text-farm-green text-sm mt-2">— Emma, Organic Farmer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
