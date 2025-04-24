
import { CheckCircle, Truck, Store, Package } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Store,
      title: "Farmers List Products",
      description:
        "Local farmers list their fresh produce directly on our platform.",
    },
    {
      icon: CheckCircle,
      title: "You Place an Order",
      description:
        "Browse products, select what you want, and place your order online.",
    },
    {
      icon: Package,
      title: "Farmers Prepare",
      description:
        "Your order is prepared by the farmers, ensuring maximum freshness.",
    },
    {
      icon: Truck,
      title: "Delivery or Pickup",
      description:
        "Choose home delivery or pick up your order at a convenient location.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-farm-green-dark mb-4">
          How Village Market Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We connect you directly with local farmers, eliminating middlemen
          and ensuring farmers receive fair compensation while you get the freshest produce.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-farm-green-light/20 flex items-center justify-center mb-4">
                <step.icon className="w-8 h-8 text-farm-green-dark" />
              </div>
              <h3 className="text-xl font-semibold text-farm-green-dark mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-full h-0.5 bg-farm-green-light/30">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 rotate-45 w-3 h-3 border-t-2 border-r-2 border-farm-green-light"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
