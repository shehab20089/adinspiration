import NormalSearch from "@/components/Icons/NormalSearch";
import { Input } from "@/components/ui/input";
import { TypographyP } from "../Typography";
import { Switch } from "@/components/ui/switch";
import { filterItems } from "./data";
import DragScroll from "../DragableScroll";

export const FilterBox = () => {
  return (
    <div className="flex items-center relative overflow-hidden gap-4 ">
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
};
