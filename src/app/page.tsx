import styles from "./page.module.css";
import MarqueeLogos from "@/components/home/marquees/MarqueeLogos";
import ScrollingText from "@/components/home/scrollingtext/ScrollingText";
import Predefine from "@/components/home/predefine/predefine";
import Slider from "@/components/home/slider/Lifttypeslider";
import HSection from "@/components/home/life/Herosection";
import Testimonial from "@/components/home/testimonial/Testimonialssection";
import FaqContact from "@/components/home/faqcontact/FaqContact";
import Designed from "@/components/home/designed/DesignedSpacesHero";
import Carousel from "@/components/home/carousel/Carousel";



export default function Home() {
  return (
    <div className={styles.page}>
      <MarqueeLogos />
      <ScrollingText />
      <Predefine />
      <Carousel />
      <Slider />
      <HSection />
      <Designed />
      <Testimonial />
      <FaqContact />
    </div>
  );
}
