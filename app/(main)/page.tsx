import { Heading1, TypographyP } from "@/components/shared/Typography";
import { FilterBox } from "@/components/shared/FilterBox/FilterBox";
import { InspirationAdCard } from "@/components/shared/InspirationAdCard";
import { inspirationAds } from "./_data";
import { ScrollTopButton } from "@/components/shared/ScrollTopButton";
export default function Home() {
  return (
    <div className="">
      {/* Heading Area */}
      <div className="max-w-[901px] text-center mx-auto space-y-4 mb-14">
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
      <FilterBox className="mb-12" />
      <div className="flex flex-wrap gap-5 mb-[66px]">
        {inspirationAds.map((ad) => (
          <InspirationAdCard
            key={ad.id}
            adUrl={ad.adUrl}
            brandUrl={ad.brandUrl}
            brandLink={ad.brandLink}
            brandName={ad.brandName}
            className="flex-1"
            isNew
          />
        ))}
      </div>
      <TypographyP className="flex items-center justify-center gap-2">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin h-4 w-4"
        >
          <path
            d="M13.0968 17.0135C11.3471 17.908 9.35272 18.2053 7.41824 17.8599C5.48376 17.5146 3.71548 16.5455 2.38341 15.1009C1.05134 13.6562 0.228695 11.8153 0.0411035 9.85917C-0.146488 7.90308 0.31128 5.93934 1.3445 4.26784C2.37773 2.59633 3.92962 1.30892 5.76321 0.602193C7.59679 -0.104531 9.61129 -0.191725 11.4991 0.353925C13.3869 0.899576 15.0442 2.04808 16.218 3.62406C17.3918 5.20004 18.0175 7.11688 17.9996 9.08187L15.4472 9.05865C15.46 7.65097 15.0117 6.27778 14.1708 5.14878C13.33 4.01977 12.1427 3.197 10.7903 2.80611C9.43792 2.41521 7.99477 2.47768 6.68122 2.98396C5.36767 3.49025 4.25592 4.41253 3.51574 5.60996C2.77556 6.8074 2.44762 8.21418 2.58201 9.61549C2.7164 11.0168 3.30572 12.3356 4.25999 13.3706C5.21426 14.4055 6.48103 15.0997 7.86686 15.3471C9.25268 15.5945 10.6814 15.3815 11.9348 14.7407L13.0968 17.0135Z"
            fill="#4B5768"
          />
        </svg>
        Loading...
      </TypographyP>
      <ScrollTopButton />
    </div>
  );
}
