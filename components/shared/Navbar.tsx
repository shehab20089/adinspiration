"use client";
import { Heading2, TypographyP } from "./Typography";
import { Button } from "../ui/button";
import { SubscribeMail } from "./SubscribeMail";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Menu } from "lucide-react";

const navItems = [
  {
    title: "Inspiration",
    key: "inspiration",
    route: "/inspiration",
  },
  {
    title: "Templates",
    key: "templates",
    route: "/templates",
  },
  {
    title: "Tools",
    key: "tools",
    route: "/tools",
  },
];
export const Navbar = () => {
  const isSmallerView = useMediaQuery(`(max-width: 1200px)`);
  if (!isSmallerView)
    return (
      <header className="flex items-center justify-between border-b border-[#E7EAEE] ">
        <Heading2 className="text-mainDark px-[26px] py-[27.5px]">
          ADINSPIRATION.COM
        </Heading2>
        <div className="flex flex-1 justify-between px-10 items-center">
          {/* Nav items */}
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Button variant="link" size={"link"} key={item.key}>
                {item.title}
              </Button>
            ))}
          </nav>
          {/* Subscribe mail and avatar */}
          <SubscribeMail />
          <div className="flex items-center gap-2 rounded-full bg-[#EFEFEF] p-1 cursor-pointer hover:bg-[#EBEBED] transition-all">
            <TypographyP className="text-black text-xs font-semibold ms-[13px]">
              First name
            </TypographyP>
            <Avatar>
              <AvatarImage src="https://s3-alpha-sig.figma.com/img/7509/7682/e30e1d4b7265ac71b2a34b27aa5ae19b?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RDJNW4OWisai26HqluIB6wMgEckP9O3859Is1jf1orKEnNiIZHOiFVZBiBkH80F4-ZWOmSu4BMTfqs8H8oPuUT17hz28ZH-LChDk7NkNvhhfC97pBgMD4eEIW~Efh8p~yCIlhJc4lK6sk08if5tDn657DDGEiDLw8T~4V0rLFxquO22ZwTQ~~0DvbMY-ebIWagaj~-8o2Srlen9U~lg9QfTe6pviv-fkYaTz1OnkjAcoZ1eO9lx8JFyrFIg4iZnFaRBzsJVCM6wQyAIb-er93Bbi67brkJy9klqDoUPndvjuPbjJXAchhPJvDyRuFT3Db79yvJk0wJY2dPmy9DFr0Q__" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
    );
  return (
    <div className="flex items-center justify-between border-b py-4 px-6 border-[#E7EAEE]">
      <TypographyP className="text-mainDark text-lg font-normal">
        ADINSPIRATION.COM
      </TypographyP>
      <Menu />
    </div>
  );
};
