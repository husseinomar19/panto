import Image from "next/image"
import ou2 from "@/app/assest/Image/our2.png"
import ou3 from "@/app/assest/Image/our3.png"
import avatr from "@/app/assest/Image/avater.png"
import { FaStar } from "react-icons/fa6";
export default function OurClient(){
    return (
        <>
        <div className="flex justify-center items-center w-full mt-[100px] mb-[100px]">


            <div className="flex justify-center items-center flex-col w-full max-w-[1200px]"> 

                <div className="text-center">
                    <p className="text-[18px] text-[#E58411] uppercase">Testimonials</p>
                    <h2 className="text-[42px] font-bold mt-[10px]">Our Client Reviews</h2>
                </div>


                <div className="flex justify-between items-center w-full gap-[30px] mt-[50px]">

                <div className=" w-[370px] h-[476px] relative flex justify-center items-center ">
                    <Image
                    className="w-full h-full object-cover"
                    src={ou3}
                    alt="tabel"
                    />

                    <div className="flex absolute w-[334px] h-[239px] bg-white rounded-[15px] bottom-[15px] justify-center items-center flex-col p-[25px]">

                    <div className="p-[8px] rounded-full bg-white absolute top-[-30px]">
                        <Image
                        width={50}
                        height={50}
                        src={avatr}
                        alt="avatar" />
                        </div>
                        <p className="text-[18px] font-bold">Bang Upin</p>
                        <p className="text-[12px] mt-1">Pedagang Asongan</p>
                        <p className="text-center mt-3.5 text-[14px]">“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                         <div className="flex justify-start items-center mt-[10px] gap-1">
                        {Array.from({length : 5}).map((_,index) =>{
                            return(
                                                 
                            <div key={index}>
                            <FaStar color="#F6B76F" />
                            </div>
                                               
                            )
                            })}                    
                        </div>
                    
                    </div>


                </div>


                <div className=" w-[370px] h-[476px] relative flex justify-center items-center ">
                    <Image
                    className="w-full h-full object-cover"
                    src={ou2}
                    alt="tabel"
                    />

                    <div className="flex absolute w-[334px] h-[239px] bg-white rounded-[15px] bottom-[15px] justify-center items-center flex-col p-[25px]">

                    <div className="p-[8px] rounded-full bg-white absolute top-[-30px]">
                        <Image
                        width={50}
                        height={50}
                        src={avatr}
                        alt="avatar" />
                        </div>
                        <p className="text-[18px] font-bold">Bang Upin</p>
                        <p className="text-[12px] mt-1">Pedagang Asongan</p>
                        <p className="text-center mt-3.5 text-[14px]">“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                         <div className="flex justify-start items-center mt-[10px] gap-1">
                        {Array.from({length : 5}).map((_,index) =>{
                            return(
                                                 
                            <div key={index}>
                            <FaStar color="#F6B76F" />
                            </div>
                                               
                            )
                            })}                    
                        </div>
                    
                    </div>


                </div>



                <div className=" w-[370px] h-[476px] relative flex justify-center items-center ">
                    <Image
                    className="w-full h-full object-cover"
                    src={ou3}
                    alt="tabel"
                    />

                    <div className="flex absolute w-[334px] h-[239px] bg-white rounded-[15px] bottom-[15px] justify-center items-center flex-col p-[25px]">

                    <div className="p-[8px] rounded-full bg-white absolute top-[-30px]">
                        <Image
                        width={50}
                        height={50}
                        src={avatr}
                        alt="avatar" />
                        </div>
                        <p className="text-[18px] font-bold">Bang Upin</p>
                        <p className="text-[12px] mt-1">Pedagang Asongan</p>
                        <p className="text-center mt-3.5 text-[14px]">“Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal“</p>
                         <div className="flex justify-start items-center mt-[10px] gap-1">
                        {Array.from({length : 5}).map((_,index) =>{
                            return(
                                                 
                            <div key={index}>
                            <FaStar color="#F6B76F" />
                            </div>
                                               
                            )
                            })}                    
                        </div>
                    
                    </div>


                </div>

                    

                    
 

                </div>

            </div>

        </div>
        </>
    )
}