import { Heading1, TypographyP } from "@/components/shared/Typography";

export default function Home() {
  return (
    <div className="">
      {/* Heading Area */}
      <div className="max-w-[901px] text-center mx-auto space-y-4">
        <Heading1 className=" text-[40px] font-bold ">
          The Best <span className="text-[#0866FF] ">Facebook</span>,{" "}
          <span className="text-[#DD2A7B]">Instagram</span>, And Meta Ad
          Inspiration, Templates and Examples
        </Heading1>
        <TypographyP className=" text-center mx-auto text-lg text-[#323A46]">
          Want to take your Meta ads to the next level? You get the best ad
          templates, real-life examples, and fresh creative ideas to make your
          ads stand out and sell even more!
        </TypographyP>
      </div>
    </div>
  );
}
