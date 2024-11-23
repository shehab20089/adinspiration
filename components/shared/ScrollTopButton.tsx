"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ScrollTopButton = ({
  className,
  ...props
}: React.ComponentProps<"button">) => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      toggleVisibility();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={cn(
        "fixed bottom-[300px] md:right-8 right-[2px] p-1 md:p-2 rounded-full bg-black/60  text-white shadow-lg transition-opacity duration-300",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      onClick={scrollToTop}
      {...props}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="md:w-6 md:h-6 w-4 h-4"
      >
        <path
          d="M12 19V5M12 5L5 12M12 5L19 12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
