
import { Link } from "react-router-dom";

type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
};

const categories: Category[] = [
  {
    id: "vegetables",
    name: "Vegetables",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Fresh, seasonal vegetables straight from the farm"
  },
  {
    id: "fruits",
    name: "Fruits",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Ripe, juicy fruits picked at peak freshness"
  },
  {
    id: "dairy",
    name: "Dairy",
    image: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Milk, cheese and more from ethically raised animals"
  },
  {
    id: "honey",
    name: "Honey & Preserves",
    image: "https://images.unsplash.com/photo-1587049352851-8d4e89133924?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Sweet homemade honeys and fruit preserves"
  }
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-farm-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-farm-green-dark mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              to={`/products/${category.id}`}
              className="group block"
            >
              <div className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 group-hover:-translate-y-2">
                <div className="relative h-52">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-farm-green-dark/80 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm text-farm-cream/90">{category.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
