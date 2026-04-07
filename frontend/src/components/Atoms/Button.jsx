import React from "react";

export default function Button({
  children,
  type = "button",
  bgColor = "",
  textColor = "text-black",
  className = "",
  ...props
}) {
  return (
    <button className={`px-4 py-3 bg-[#e81cff] hover:bg-[#e81cff]/90 border border-transparent hover:border-white hover:border-dotted ${bgColor} ${textColor} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
}