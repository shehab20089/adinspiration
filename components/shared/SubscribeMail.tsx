import { SmsIcon } from "../Icons/SmsIcon";

export const SubscribeMail = () => {
  return (
    <div className=" border border-[#EBEBED] flex items-center gap-2 rounded-full py-1 px-4 cursor-pointer hover:bg-[#EBEBED] transition-all">
      <div className="items-center flex gap-2 text-[#64748B] text-xs">
        <SmsIcon />
        Get more Ad inspiration in your inbox every week
      </div>
      <div className="font-medium text-sm   text-[#201B00] rounded-full bg-[#FFD400] px-4 py-[9.5px]">
        Yes Please :D
      </div>
    </div>
  );
};
