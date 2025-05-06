import Link from "next/link";
import ShopIcon from "./svg/icon";

const navbar = [
    {
    id: 1,
    naam : "Furniture",
    link : "/"
    },
    {
    id: 2,
    naam : "Shop",
    link : "/",
    },
    {
    id: 3,
    naam : " About Us",
    link : "/",
    },
    {
    id: 4,
    naam : "Contact",
    link : "/",
    },
]

export default function Header(){
    return (
        <>
        <div className="flex justify-between items-center w-full" >
             <h2 className="font-bold text-[28px] text-white">Panto</h2>

             <ul className="flex items-center space-x-[40px] text-white">
                {navbar.map((index)=>{
                    return (
                    <li key={index.id}>
                    <Link href={index.link} className="font-medium tracking-wider">
                     {index.naam}
                    </Link>
                </li>
                    )
                })}
             </ul>

             <ShopIcon />
        </div>

        </>
    )
}