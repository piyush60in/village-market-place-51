
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import FarmerSpotlight from "@/components/home/FarmerSpotlight";
import BenefitsSection from "@/components/home/BenefitsSection";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <HowItWorks />
      <FarmerSpotlight />
      <BenefitsSection />
      <Newsletter />
    </Layout>
  );
};

export default Index;
