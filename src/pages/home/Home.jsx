import Hero from "./Hero";
import ProductCategory from "../../components/ProductCateogry";
import ProductShowcase from "./ProductShowcase";
import BestAudio from "../../components/BestAudio";

function Home() {
  return (
    <div>
      <Hero></Hero>
      <ProductCategory></ProductCategory>
      <ProductShowcase></ProductShowcase>
      <BestAudio></BestAudio>
    </div>
  );
}

export default Home;
