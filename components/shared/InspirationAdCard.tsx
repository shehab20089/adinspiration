"use client";

import { cn } from "@/lib/utils";
import { TypographyP } from "./Typography";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { useState } from "react";
import { BookMarkIcon } from "../Icons/BookMarkIcon";
import { CopyIcon } from "../Icons/CopyIcon";

interface InspirationAdCardProps extends React.ComponentProps<"div"> {
  isNew?: boolean;
  adUrl: string | undefined;
  brandUrl: string | undefined;
  brandLink: string;
  brandName: string;
}
export const InspirationAdCard = ({
  isNew,
  className,
  adUrl,
  brandUrl,
  brandLink,
  brandName,
  ...props
}: InspirationAdCardProps) => {
  const [imgSrc, setImgSrc] = useState(adUrl ?? "/images/placeholder.png");

  return (
    <div
      className={cn(
        "rounded-[20.57px] relative group  sm:min-w-[267.41px] sm:max-w-[267.41px] min-w-full max-w-full border-[#E7EAEE] space-y-[11.5px] border-[0.96px] border-[#E7EAEE",
        className
      )}
      {...props}
    >
      {/* ad card header */}
      <div className="flex items-center justify-between pt-[15.3px] px-[15.3px]">
        <TypographyP className="text-[#10B981] text-[10.29px] font-medium">
          {isNew ? "New" : ""}
        </TypographyP>
        <div className="flex items-center gap-2">
          <Avatar className="w-[22.95px] h-[22.95px]">
            <AvatarImage src={brandUrl}></AvatarImage>
          </Avatar>
          <div
            className="rounded-full flex items-center justify-center bg-transparent border-[0.96px] w-[22.95px] h-[22.95px]"
            onClick={() => navigator.clipboard.writeText(brandLink)}
          >
            <CopyIcon className="w-[11.48px] h-[11.48px] text-primary" />
          </div>
          <div className="rounded-full flex items-center justify-center bg-transparent border-[0.96px] w-[22.95px] h-[22.95px]">
            <BookMarkIcon className="w-[11.48px] h-[11.48px] text-primary" />
          </div>
        </div>
      </div>
      {/* ad card img */}
      <div className=" relative px-[15.3px]">
        <div className=" w-full h-[367px] rounded-[15.3px]   overflow-hidden  ">
          {/* Using state to handle image errors */}
          <Image
            src={imgSrc}
            alt={brandName}
            width={0}
            height={0}
            sizes="100%"
            className="w-full h-full object-cover"
            onError={() => {
              setImgSrc("/images/placeholder.png");
            }}
          />
        </div>
        <div className="absolute cursor-pointer inset-0 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 focus-within:opacity-100 active:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button variant={"default"} className="bg-black rounded-full">
            <Avatar className="w-4 h-4 ">
              <AvatarImage src={brandUrl}></AvatarImage>
            </Avatar>
            Edit Template
          </Button>
        </div>
      </div>
      {/* brand name */}
      <TypographyP className="text-[13.72px] pb-[15.3px] px-[15.3px] font-medium text-[#323A46]">
        {brandName}
      </TypographyP>
    </div>
  );
};
