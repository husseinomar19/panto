import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
export default function Footer()
{
    return (
        <>
        <footer className="flex justify-center items-center w-full">

            <div className="flex justify-between items-center w-full max-w-[1200px]">

                <div>
                    <h2 className="font-bold text-[20px]">Pantp</h2>
                    <p className="max-w-[270px] tracking-[1px] mt-5">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>


                <div className="flex justify-between items-center">

                    <div>
                        <p className="text-[#E58411]">Services</p>

                         <ul>
                            <li>
                            <Link href={"/"}>
                            Email Marketing
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}>
                            Campaigns
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}>
                            Branding
                            </Link>
                            </li>
                         </ul>
                    </div>
                    <div>
                        <p className="text-[#E58411]">Furniture</p>

                         <ul>
                            <li>
                            <Link href={"/"}>
                            Email Marketing
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}>
                            Campaigns
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}>
                            Branding
                            </Link>
                            </li>
                         </ul>
                    </div>
                    <div>
                        <p className="text-[#E58411]">Follow Us</p>

                         <ul>
                            <li>
                            <Link href={"/"}>
                            <FaFacebookF />Email Marketing
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}>
                            <FaXTwitter /> Campaigns
                            </Link>
                            </li>
                            <li>
                            <Link href={"/"}>
                            <BsInstagram /> Branding
                            </Link>
                            </li>
                         </ul>
                    </div>

                </div>

            </div>
        </footer>
        </>
    )
}