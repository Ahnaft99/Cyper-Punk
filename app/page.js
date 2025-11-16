import Banner from "./home/Banner";
import Image from "next/image";;
import Nav from "./home/Nav";
import Dreams from "./home/Dreams";
import Unveil from "./home/Unveil";


export default function Home() {
  return (
    <>
          <div className="body">
          <div className="border-box relative">
      <Nav />
      <Banner />
      <Dreams/>
      <Unveil/>
    </div>
          </div>
    

  
     

    
 
   
      
    </>
  );
}
