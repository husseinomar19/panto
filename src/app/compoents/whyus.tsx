import Link from "next/link";
import WhyUsCard from "./card/WhyUsCard";

export default function MhyUs() {
  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="flex w-full py-[120px] justify-between items-center max-w-[1200px]">
          <h2 className="text-[#1E1E1E] text-[42px] font-bold">
            why <br />
            Choosing Us
          </h2>

          <div className="flex justify-between items-center">
            <WhyUsCard
              title="Luxury facilities"
              descrebtion="The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
              url="/"
              pw={285}
              mt={20}
            />

            <WhyUsCard
            pw={285}
              title="Affordable Price"
              descrebtion="You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
              url="/"
              mt={20}
            />

            <WhyUsCard
            pw={285}
              title="Many Choices"
              descrebtion="You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
              url="/"
              mt={20}
            />
          </div>
        </div>
      </div>
    </>
  );
}
