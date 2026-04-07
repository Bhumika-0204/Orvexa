import React from "react";
import { Link } from "react-router-dom";

function Logo({ width = "w-12 sm:w-16", className = "" }) {
  return (
    <Link to={"/"}>
      <div className={`mr-4 shrink-0 flex items-center ${className}`}>
        <h3 className="text-3xl font-semibold font-Playpen cursive font text-fuchsia-500">ORVΞXA</h3>
      </div>
    </Link>
  );
}

export default Logo;