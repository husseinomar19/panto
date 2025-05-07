import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
export default function Footer()
{
    return (
        <>
        <footer className="flex justify-center items-center w-full bg-[#F7F7F7] pt-[80px] pb-[40px] flex-col">

            <div className="flex justify-between items-center w-full max-w-[1200px]">

                <div className="w-[400px]">
                    <h2 className="font-bold text-[20px]">Pantp</h2>
                    <p className="tracking-[1px] mt-5 w-full">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>


                <div className="flex justify-between items-center gap-[100px]">

                    <div>
                        <p className="text-[#E58411]">Services</p>

                         <ul className="flex flex-col gap-[8px]">
                            <li>
                            <Link href={"/"}  className="text-[14px] font-light">
                            Email Marketing
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}  className="text-[14px] font-light">
                            Campaigns
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}  className="text-[14px] font-light">
                            Branding
                            </Link>
                            </li>
                         </ul>
                    </div>
                    <div>
                        <p className="text-[#E58411]">Furniture</p>

                         <ul className="flex flex-col gap-[8px]">
                            <li>
                            <Link href={"/"} className="text-[14px] font-light">
                            Email Marketing
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}  className="text-[14px] font-light">
                            Campaigns
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}  className="text-[14px] font-light">
                            Branding
                            </Link>
                            </li>
                         </ul>
                    </div>
                    <div>
                        <p className="text-[#E58411]">Follow Us</p>

                         <ul className="flex flex-col gap-[8px]">
                            <li>
                            <Link href={"/"} className="flex justify-start items-center gap-1 text-[14px] font-light">
                            <FaFacebookF />Email Marketing
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"} className="flex justify-start items-center gap-1 text-[14px] font-light">
                            <FaXTwitter /> Campaigns
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"} className="flex justify-start items-center gap-1 text-[14px] font-light">
                            <BsInstagram /> Branding
                            </Link>
                            </li>
                         </ul>
                    </div>

                </div>

                

            </div>

            <div className="flex justify-between items-center gap-1 w-full max-w-[1200px] mt-[70px]">
                    <p className="text-[14px] font-light">Copyright © 2021</p>

                    <ul className="flex  gap-[14px]">
                            <li>
                            <Link href={"/"} className="text-[14px] font-light">
                            Terms & Conditions
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"} className="text-[14px] font-light">
                            Privacy Policy
                            </Link>
                            </li>  
                         </ul>      
            </div>


        </footer>
        </>
    )
}