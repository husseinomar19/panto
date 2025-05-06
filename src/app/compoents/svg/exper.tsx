import Image from "next/image"
import exprimg from '../../assest/Image/experimg.png'
import WhyUsCard from "../card/WhyUsCard"
export default function Exper(){
    return (
        <>
        <div className="w-full flex justify-center items-center relative pb-[270px] mt-[70px]">


            <div className=" flex justify-between max-w-[1200px] w-full ">

                <div className="flex-1/2">
                 <Image
                 className="absolute left-0 h-[445px] bg-cover"
                 src={exprimg}
                 width={629}
                 alt="tabel foto" />
                </div>

                <div className="text-[#E58411] text-[16px] flex-1/2">
                    <p className="uppercase">experiences</p>
                    <WhyUsCard
                    title="we provide you the best experience"
                    size={42}
                    pw={460}
                    descrebtion="You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials"
                    url="/" 
                    mt={40}/>
                </div>

            </div>

        </div>
        </>
    )
}