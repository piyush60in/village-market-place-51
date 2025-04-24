
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Product = {
  id: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  farmer: {
    name: string;
    location: string;
  };
  isOrganic: boolean;
};

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Farm Fresh Tomatoes",
    price: 3.99,
    unit: "lb",
    image: "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    farmer: {
      name: "Green Valley Farm",
      location: "Meadowville"
    },
    isOrganic: true
  },
  {
    id: "2",
    name: "Organic Carrots",
    price: 2.49,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    farmer: {
      name: "Root & Grow",
      location: "Riverside"
    },
    isOrganic: true
  },
  {
    id: "3",
    name: "Fresh Goat Cheese",
    price: 6.99,
    unit: "8oz",
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    farmer: {
      name: "Hillside Dairy",
      location: "Greendale"
    },
    isOrganic: false
  },
  {
    id: "4",
    name: "Wildflower Honey",
    price: 8.50,
    unit: "jar",
    image: "https://images.unsplash.com/photo-1558642084-fd07fae5282e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    farmer: {
      name: "Sunny Bee Apiary",
      location: "Meadowville"
    },
    isOrganic: true
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold text-farm-green-dark">Featured Products</h2>
          <Link to="/products" className="text-farm-green hover:text-farm-green-dark transition-colors font-medium">
            View All Products
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Link to={`/products/${product.id}`} className="block relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover"
                />
                {product.isOrganic && (
                  <Badge className="absolute top-2 right-2 bg-farm-green text-white">
                    Organic
                  </Badge>
                )}
              </Link>
              <div className="p-4">
                <Link to={`/products/${product.id}`}>
                  <h3 className="font-semibold text-lg text-farm-green-dark hover:text-farm-green transition-colors mb-1">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-sm text-gray-500 mb-3">
                  by {product.farmer.name} · {product.farmer.location}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-farm-brown-dark font-bold">
                    ${product.price.toFixed(2)} <span className="text-xs text-gray-500">/ {product.unit}</span>
                  </span>
                  <Button size="sm" className="bg-farm-green hover:bg-farm-green-dark text-white">
                    <ShoppingCart className="h-4 w-4 mr-1" /> Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
