
import { Check } from "lucide-react";

const BenefitsSection = () => {
  const consumerBenefits = [
    "Fresh produce harvested at peak ripeness",
    "Know exactly where your food comes from",
    "Support local farmers and rural communities",
    "Reduce carbon footprint with shorter supply chains",
    "Discover unique local and heirloom varieties"
  ];
  
  const farmerBenefits = [
    "Sell directly to consumers for better profit margins",
    "Set your own fair prices for your products",
    "Build relationships with your customer community",
    "Reduce food waste with demand-based harvesting",
    "Gain independence from traditional distribution channels"
  ];
  
  return (
    <section className="py-16 bg-farm-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-farm-green-dark mb-12">
          Benefits of Farm-to-Table
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-farm-green-dark mb-6">
              For Consumers
            </h3>
            <ul className="space-y-4">
              {consumerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-farm-green mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-farm-brown-dark mb-6">
              For Farmers
            </h3>
            <ul className="space-y-4">
              {farmerBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-5 w-5 text-farm-brown mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
