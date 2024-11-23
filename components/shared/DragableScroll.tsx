"use client";
import React, { useState, useRef, MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

interface DragScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

const DragScroll = ({ children, className, ...props }: DragScrollProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    if (!containerRef.current) return;
    const startX = e.pageX - containerRef.current.offsetLeft;
    setStartX(startX);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !containerRef.current) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleScrollRight = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({
      left: containerRef.current.scrollLeft + 200,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        ref={containerRef}
        className={cn("overflow-x-scroll scrollbar-none relative", className)}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        {...props}
      >
        <div
          className={`flex gap-[9px] items-center ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
        >
          {children}
        </div>
      </div>
      <button
        onClick={handleScrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg border hover:bg-gray-50"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-4 h-4 text-primary" />
      </button>
    </>
  );
};

export default DragScroll;
