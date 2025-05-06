import WhyUsCard from "./card/WhyUsCard";
import Image from "next/image";
import sel1 from "@/app/assest/Image/sel1.png"
import sel2 from "@/app/assest/Image/sel2.png"
import sel3 from "@/app/assest/Image/sel3.png"

export default function Sell(){
    return(
        <>
        <div className="w-full flex justify-center items-center"> 

            <div className="w-full max-w-[1200px] flex justify-between items-center gap-[100px]">
             
            <div className="flex-[40%]">
            <p className="uppercase text-[#E58411]">experiences</p>
            <WhyUsCard
             title="Very serious materials for making furniture"
             descrebtion="Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price"
             url="/"
             size={42}
             pw={500}
             mt={30}
              />
            </div>

            <div className="flex-1/2 flex justify-between items-center">

            <div className="flex flex-col items-center justify-center">
                <Image
                src={sel1}
                width={223}
                height={250}
                alt="tabel" />
                 <Image
                src={sel2}
                width={223}
                height={338}
                alt="tabel" />
            </div>

            <div>
                <Image
                src={sel3}
                width={624}
                height={445}
                alt="tabel" />
            </div>

            </div>


            </div>

        </div>
        </>
    )
}