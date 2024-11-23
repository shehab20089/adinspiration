"use client";
import NormalSearch from "@/components/Icons/NormalSearch";
import { Input } from "@/components/ui/input";
import { TypographyP } from "../Typography";
import { Switch } from "@/components/ui/switch";
import { filterItems } from "./data";
import DragScroll from "../DragableScroll";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const FilterBox = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  if (!isMobile)
    return (
      <div
        className={cn(
          "flex items-center relative overflow-hidden gap-4 ",
          className
        )}
        {...props}
      >
        <Input
          icon={<NormalSearch />}
          placeholder="Search"
          className="w-[205px]  "
        />
        <label className="rounded-full flex  border-[#EBEBED] border px-4 py-2.5 gap-2.5 items-center bg-white">
          <TypographyP className="text-primary text-sm font-medium cursor-pointer select-none">
            Templates
          </TypographyP>
          <Switch defaultChecked={true} />
        </label>
        <DragScroll className="  ">
          {filterItems.map((item) => (
            <div
              key={item.name}
              className="cursor-pointer flex items-center gap-2.5 border bg-white rounded-full px-4 py-[6.5px] flex-shrink-0"
            >
              <TypographyP className="text-[#4B5768] text-sm font-medium  select-none">
                {item.name}
              </TypographyP>
              {item.items > 0 && (
                <TypographyP className="text-[#4B5768] text-sm font-medium bg-[#F7F8F9] border  rounded-[5px] px-2 py-1 select-none">
                  {item.items}
                </TypographyP>
              )}
            </div>
          ))}
        </DragScroll>
      </div>
    );
  return (
    <div className={cn("", className)} {...props}>
      <Input
        icon={<NormalSearch />}
        placeholder="Search"
        className="w-full mb-4 "
      />
      <div className="flex  gap-4">
        <label className="rounded-full flex-1 flex  border-[#EBEBED] border px-4 py-2.5 gap-2.5 items-center bg-white">
          <TypographyP className="text-primary text-sm font-medium cursor-pointer select-none">
            Templates
          </TypographyP>
          <Switch defaultChecked={true} />
        </label>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex-1 rounded-full" asChild>
            <Button variant={"outline"}>
              Filters <ChevronDown className="ml-auto" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {filterItems.map((item) => (
              <DropdownMenuItem key={item.name}>
                <div className="flex items-center justify-between w-full">
                  <span>{item.name}</span>
                  {item.items > 0 && (
                    <span className="text-sm text-[#4B5768] bg-[#F7F8F9] border rounded-[5px] px-2 py-1">
                      {item.items}
                    </span>
                  )}
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
