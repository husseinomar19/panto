import More from "./card/More"
import { CarouselSize } from "./silder/CarouselSize"
export default function BestSell(){
    return (
        <>

        <div className="flex justify-center items-center w-full bg-[#F7F7F7]">


            <div className="flex justify-center items-center flex-col w-full max-w-[1200px]">

            <div className="flex justify-center items-center w-full pt-[30px]">
                <h2 className="font-bold text-[42px]">Best Selling Product</h2>
            </div>


            <CarouselSize
            titel="Sakarias Armchair"
            prijs={392}
            star={5}
            categrory="Chair" />





            <div className="flex justify-center items-center w-full py-[30px]">
              <More
              title="View All"
              url="/"
               />

            </div>


            </div>

        </div>

        </>
    )
}