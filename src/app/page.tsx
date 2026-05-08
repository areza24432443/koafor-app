import Link from "next/dist/client/link";
import Image from "next/image";
import Container from "./components/Container";
import Slider from "./components/Slider";
import Featured from "./components/Featured";
import Customers from "./components/Customers";

export default function Home() {
  return (
  <Container >
      
    <Slider />
    <Featured />
    <Customers />
   
     
    </Container>
  );
}
