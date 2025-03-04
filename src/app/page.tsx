import Image from "next/image";
import Navbar1 from "./components/navbar";
import Hero from "./components/hero";
import Listing from "./components/listing";

export default function Home() {
  return (
   <>
   <Navbar1/>
   <Hero/>
   <Listing/>
   </>
  );
}
