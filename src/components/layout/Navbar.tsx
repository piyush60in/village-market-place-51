
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, User, Package } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-farm-cream shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Package className="h-8 w-8 text-farm-green-dark" />
              <span className="ml-2 text-xl font-semibold text-farm-green-dark">Village Market</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="relative w-64">
              <Input 
                type="text" 
                placeholder="Search products..." 
                className="pl-3 pr-8 py-1 border-farm-green rounded-full focus:ring-farm-green focus:border-farm-green"
              />
            </div>
            <div className="flex space-x-4">
              <Link to="/products" className="text-farm-green-dark hover:text-farm-green-light transition-colors">
                Products
              </Link>
              <Link to="/farmers" className="text-farm-green-dark hover:text-farm-green-light transition-colors">
                Farmers
              </Link>
              <Link to="/about" className="text-farm-green-dark hover:text-farm-green-light transition-colors">
                About
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/account" className="text-farm-green-dark hover:text-farm-green-light transition-colors">
                <User className="h-5 w-5" />
              </Link>
              <Link to="/cart" className="text-farm-green-dark hover:text-farm-green-light transition-colors relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-2 -right-2 bg-farm-brown-light text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link to="/login">
                <Button className="bg-farm-green hover:bg-farm-green-dark text-white">
                  Login
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-farm-green-dark hover:text-farm-green-light focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-farm-cream pb-4 px-4">
          <div className="my-3 relative">
            <Input 
              type="text" 
              placeholder="Search products..." 
              className="w-full pl-3 pr-8 py-1 border-farm-green rounded-full"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <Link 
              to="/products" 
              className="text-farm-green-dark hover:text-farm-green-light px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link 
              to="/farmers" 
              className="text-farm-green-dark hover:text-farm-green-light px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Farmers
            </Link>
            <Link 
              to="/about" 
              className="text-farm-green-dark hover:text-farm-green-light px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex items-center justify-between pt-3 border-t border-farm-green/20">
              <Link 
                to="/account"
                className="text-farm-green-dark hover:text-farm-green-light px-3 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="h-5 w-5" />
              </Link>
              <Link 
                to="/cart" 
                className="text-farm-green-dark hover:text-farm-green-light px-3 py-2 relative"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute top-0 right-0 bg-farm-brown-light text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </Link>
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="bg-farm-green hover:bg-farm-green-dark text-white">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
