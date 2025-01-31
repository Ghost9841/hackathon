import Image from "next/image";
import { Hero } from "./hero/HeroSection";
import { Navbar } from "./hero/Navbar";
import Menu from "./hero/menu";
import TransitionEffect from "./TransitionEffect";
import Footer from "./Footer";



export default function Home() {
  return (
    <div>
      <TransitionEffect/>
        <Navbar/>
        <Hero/>
        <Menu/>
        <Footer/>

    </div>
  );
}
