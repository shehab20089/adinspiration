import { Heading2, TypographyP } from "./Typography";

export const Footer = () => {
  return (
    <footer className="  pt-12 pb-16 px-6 md:py-6 md:px-10 border-t bg-[#0D0F11] ">
      <div className="  max-w-[1280px] mx-auto md:py-[64px] md:px-8">
        <div className="md:flex items-center justify-between text-white pb-8 border-b border-[#323A46]">
          <Heading2 className="text-xl mb-7 md:mb-0">
            ADINSPIRATION.COM
          </Heading2>
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
        <div className="flex md:flow-row gap-8 flex-col-reverse items-center justify-between pt-8">
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
