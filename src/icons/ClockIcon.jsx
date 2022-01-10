import React from "react";

const ClockIcon = (props) => {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14 24.5C19.799 24.5 24.5 19.799 24.5 14C24.5 8.20101 19.799 3.5 14 3.5C8.20101 3.5 3.5 8.20101 3.5 14C3.5 19.799 8.20101 24.5 14 24.5Z"
        stroke="#1B4332"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14 7.875V14H20.125"
        stroke="#1B4332"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default ClockIcon;
