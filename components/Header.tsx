import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-[100vw] h-[5vh] bg-[#b8b8b8] sticky top-0">
      <div className="flex max-w-[80%] h-[100%] justify-between items-center mx-auto">
        <div>Logo</div>
        <div>Links</div>
        <div>Social links and stats</div>
      </div>
    </div>
  );
};

export default Header;
