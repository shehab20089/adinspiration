import React from "react";

export const CopyIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="13"
      height="12"
      viewBox="0 0 13 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.80859 3.14515H8.5306C9.97461 3.14515 11.1604 4.32618 11.1604 5.77497C11.1604 7.21898 9.97939 8.40479 8.5306 8.40479H7.80859"
        stroke="#64748B"
        stroke-width="1.14756"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.9447 8.40479H4.22747C2.77868 8.40479 1.59766 7.22376 1.59766 5.77497C1.59766 4.33096 2.77868 3.14515 4.22747 3.14515H4.9447"
        stroke="#64748B"
        stroke-width="1.14756"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.4668 5.77539H8.29199"
        stroke="#64748B"
        stroke-width="1.14756"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
