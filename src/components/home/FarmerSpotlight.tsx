
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FarmerSpotlight = () => {
  return (
    <section className="py-16 bg-farm-green-light/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-farm-green-dark mb-12">
          Meet Our Farmers
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold text-farm-green-dark mb-4">
              John & Lisa Thompson
            </h3>
            <p className="text-farm-green mb-1 font-medium">Thompson Family Farm</p>
            <p className="text-gray-600 mb-6">Growing organic vegetables for over 15 years</p>
            
            <blockquote className="pl-4 border-l-4 border-farm-brown mb-6 italic text-gray-700">
              "We believe in sustainable farming practices that are good for the land, good for our community, and good for your health. Every vegetable we grow is cultivated with care."
            </blockquote>
            
            <p className="text-gray-700 mb-6">
              The Thompsons specialize in heirloom tomatoes, peppers, and leafy greens. Their farm 
              is certified organic and uses regenerative farming practices to maintain soil health.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/farmers/thompson-family-farm">
                <Button className="bg-farm-brown hover:bg-farm-brown-dark text-white">
                  Visit Farm Profile
                </Button>
              </Link>
              <Link to="/products?farmer=thompson-family-farm">
                <Button variant="outline" className="border-farm-brown text-farm-brown hover:bg-farm-brown-light/10">
                  Shop Their Products
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1617929912578-bac03de3b771?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                  alt="Thompson Family Farmers" 
                  className="w-full h-80 object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-farm-cream rounded-lg shadow-lg p-4 max-w-[180px]">
                <div className="flex items-center gap-2 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-farm-green-dark">
                  "Their tomatoes are the best I've ever tasted!"
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  — Sarah, Happy Customer
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Link to="/farmers">
            <Button size="lg" className="bg-farm-green hover:bg-farm-green-dark text-white">
              Meet All Our Farmers
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FarmerSpotlight;
