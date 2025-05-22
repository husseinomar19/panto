import * as React from "react"
import Image from "next/image"
import char from "@/app/assest/Image/char.png"
import { FaStar } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface prop {
    titel : string;
    categrory : string;
    prijs : number
    star : number;
}

export function CarouselSize( { titel, categrory, prijs, star } : prop ) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full  max-w-[1200px] mx-auto mt-[30px]"
    >
      <CarouselContent className="space-x-[30px]">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="basis-[268px] shrink-0">
            <div className="flex justify-center items-center gap-[20px] w-[268px] h-[441px] p-[14px] bg-white rounded-[20px] flex-col">
             <Image
             className="w-full h-[255px]" 
             src={char}
             alt="char" />
             <div className="w-full">
                <p className="text-[#8D8D8D] text-[14px] font-light">{categrory}</p>
                <p className="font-bold text-[18px]">{titel}</p>
                <div className="flex justify-start items-center mt-[5px]">
                {Array.from({length : star}).map((_,index) =>{
                    return(
                        
                        <div key={index}>
                        <FaStar color="#F6B76F" />
                        </div>
                      
                    )
                })}                    
                </div>

                <div className="flex justify-between items-center w-full mt-[20px]">
                  <p className="test-[16px] font-semibold">${prijs}</p>
                  <div className="flex justify-start items-center p-2 rounded-full bg-[#0D1B39]">
                  <FiPlus color="white"/>
                  </div>
                </div>


             </div>

               
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
