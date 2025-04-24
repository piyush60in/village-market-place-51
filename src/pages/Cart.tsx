
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash, ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Layout from "@/components/layout/Layout";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, itemCount } = useCart();
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <ShoppingCart className="h-16 w-16 text-farm-green/30 mx-auto mb-6" />
          <h1 className="text-3xl font-bold text-farm-green-dark mb-4">Your Cart is Empty</h1>
          <p className="text-gray-600 mb-8">Start shopping to add products to your cart.</p>
          <Link to="/products">
            <Button className="bg-farm-green hover:bg-farm-green-dark text-white">
              Browse Products
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-farm-green-dark mb-8">Your Cart</h1>
        
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 sm:p-6">
                <table className="w-full">
                  <thead className="border-b border-gray-200">
                    <tr>
                      <th className="text-left pb-4 font-medium text-farm-green-dark">Product</th>
                      <th className="text-center pb-4 font-medium text-farm-green-dark">Quantity</th>
                      <th className="text-right pb-4 font-medium text-farm-green-dark">Price</th>
                      <th className="pb-4"><span className="sr-only">Actions</span></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {items.map((item) => (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="py-4">
                          <div className="flex items-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="h-16 w-16 object-cover rounded mr-4 hidden sm:block"
                            />
                            <div>
                              <Link to={`/products/${item.id}`} className="font-medium text-farm-green-dark hover:text-farm-green">
                                {item.name}
                              </Link>
                              <p className="text-sm text-gray-500">${item.price.toFixed(2)} / {item.unit}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4">
                          <div className="flex items-center justify-center">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
                            >
                              -
                            </button>
                            <Input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                              className="w-12 h-8 border-y border-gray-300 rounded-none text-center p-0"
                            />
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md bg-gray-100 hover:bg-gray-200"
                            >
                              +
                            </button>
                          </div>
                        </td>
                        <td className="py-4 text-right font-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="py-4 text-right">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-700"
                            title="Remove item"
                          >
                            <Trash className="h-5 w-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-6">
              <Link to="/products" className="inline-flex items-center text-farm-green hover:text-farm-green-dark">
                <ArrowLeft className="h-4 w-4 mr-1" /> Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-farm-green-dark mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Items ({itemCount}):</span>
                  <span className="font-medium">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping:</span>
                  <span className="font-medium">$5.00</span>
                </div>
                <div className="border-t pt-3 mt-3 border-gray-200">
                  <div className="flex justify-between font-semibold text-farm-green-dark">
                    <span>Total:</span>
                    <span>${(totalPrice + 5).toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Including all taxes</p>
                </div>
              </div>
              
              <Button className="w-full bg-farm-green hover:bg-farm-green-dark text-white mb-3">
                Proceed to Checkout
              </Button>
              
              <div className="text-xs text-center text-gray-500 mt-4">
                <p>Secure checkout provided by Stripe</p>
                <p className="mt-1">
                  By proceeding, you agree to our <Link to="/terms" className="underline">Terms of Service</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
