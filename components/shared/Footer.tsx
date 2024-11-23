import { Heading2, TypographyP } from "./Typography";

export const Footer = () => {
  return (
    <footer className="  py-6 px-10 border-t bg-[#0D0F11]">
      <div className="  max-w-[1280px] mx-auto py-[64px] px-8">
        <div className="flex items-center justify-between text-white pb-8 border-b border-[#323A46]">
          <Heading2 className="text-xl">ADINSPIRATION.COM</Heading2>
          <div className="flex gap-12 ">
            <TypographyP className="text-base me-[24px] text-[#B8C0CC] hover:text-white/80 cursor-pointer transition-colors duration-300">
              Blog
            </TypographyP>
            <TypographyP className="text-base  text-[#B8C0CC] hover:text-white/80 cursor-pointer transition-colors duration-300">
              ROI Calculator
            </TypographyP>
            <TypographyP className="text-base  text-[#B8C0CC] hover:text-white/80 cursor-pointer transition-colors duration-300">
              Support
            </TypographyP>
          </div>
        </div>
        <div className="flex items-center justify-between pt-8">
          <TypographyP className="text-[#B8C0CC] text-base">
            © 2024 Adinspiration. All Rights Reserved.- hello@adinspiration.com
          </TypographyP>
          <div className="flex gap-12 ">
            <TypographyP className="text-base text-[#B8C0CC] hover:text-white/80 cursor-pointer transition-colors duration-300">
              Privacy Policy
            </TypographyP>
            <TypographyP className="text-base  text-[#B8C0CC] hover:text-white/80 cursor-pointer transition-colors duration-300">
              Terms & Conditions
            </TypographyP>
          </div>
        </div>
      </div>
    </footer>
  );
};
