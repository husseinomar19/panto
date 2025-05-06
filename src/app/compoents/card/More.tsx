import Link from "next/link"
interface prop{
    title: string
    url : string
    mt ? : number
}
export default function More( {title, url ,mt}: prop ) {
    const mtop = mt ? mt : 8
    return(
        <>
        <div
        style={{marginTop : `${mtop}px`}} className="flex justify-start items-center gap-1">
          <Link className="text-[#E58411] text-[14px]" href={url}>{title}</Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="24"
            viewBox="0 0 48 24"
            fill="none"
          >
            <path
              d="M4.5 12.4002H42M42 12.4002C42 12.4002 37.5119 9.44867 36.6 7.00024M42 12.4002C42 12.4002 38.0324 15.1736 36.6 17.8002"
              stroke="#E58411"
              strokeLinecap="square"
            />
          </svg>
        </div>
        </>
    )
}