import hero from "../app/assest/Image/hero.png"
import Header from  "../app/compoents/Header"
import { IoIosSearch } from "react-icons/io";
import MhyUs from "../app/compoents/whyus";
import Exper from "@/app/compoents/svg/exper"
import Sell from "@/app/compoents/sell";
import Footer from "@/app/compoents/footer/Footer"
import { CarouselSize } from "./compoents/silder/CarouselSize";
import BestSell from "./compoents/BestSell";
import OurClient from "./compoents/Ourclient";
export default function Home() {
  return (
    <>
     
     <div
      className="w-full h-[1084px] bg-cover bg-center py-[20px]"
      style={{ backgroundImage: `url(${hero.src})` }}>
       

       <Header />


       <div className="flex justify-center items-center w-full mt-[100px] flex-col ">

         <h2 className="font-bold text-[60px] text-white text-center tracking-[1px]">Make your interior more<br></br>
         minimalistic & modern</h2>

         <p className="text-center text-white text-[24px] font-thin tracking-[1px] mt-[10px]">Turn your room with panto into a lot more<br></br> minimalist and modern with ease and speed</p>
          
         <div className="relative mt-[30px] w-[344px] h-[50px] bg-white/10 backdrop-blur-md rounded-full border border-white/30">
           <input type="text" 
           className="w-full h-full px-[10px] pl-[10px] pr-[60px] text-white rounded-full focus:outline-none placeholder:text-white placeholder:text-[15px]"
           placeholder="Search furniture"/>
           <div className="flex justify-center items-center p-[8px] rounded-full bg-[#E58411] absolute right-[5px] top-[5px] w-fit">
           <IoIosSearch color="white"  size={22}/>
           </div>
         </div>

       </div>




       

    </div>
      <MhyUs />

      <BestSell />

      <Exper />

      <Sell />
      
      <OurClient />

      <Footer />


    



    </>
  );
}
