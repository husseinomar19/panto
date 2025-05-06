interface prop {
    title: string;
    descrebtion : string;
    url : string;
    size? : number;
    pw  : number;
    mt ? : number;
}
import More from "./More";
export default function WhyUsCard({title , descrebtion , url , size , pw, mt}:prop) {
    const titelsize = size ? size : 20;
    const pwidth = pw ? pw : 285;
  return (
    <>
      <div>
        <h2 className={`text-[${titelsize}px] font-bold tracking-[1px] text-[#1E1E1E]`}>{title}</h2>
        <p
         style={{ width: `${pwidth}px` }} className={`text-[#1E1E1E] text-[14px] font-normal mt-[15px]`}>
          {descrebtion}
        </p>

        <More
        mt={mt}
        title="More info"
        url={url}/>
      </div>
    </>
  );
}
