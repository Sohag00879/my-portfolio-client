import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";
import logo from "../assets/web-development.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <Link href="/">
          <Image src={logo} width={80} height={80} alt="logo" />
        </Link>
        <div className="flex gap-8">
          <Link
            href="https://www.facebook.com/mdsohag.islam.1238"
            target="_blank"
          >
            <FaFacebook style={{ fontSize: "30px" }} />
          </Link>
          <Link href="https://x.com/SohagIs50325382" target="_blank">
            <AiFillTwitterCircle style={{ fontSize: "30px" }} />
          </Link>
          <Link
            href="https://www.instagram.com/sohag_islam879/"
            target="_blank"
          >
            <FaSquareInstagram style={{ fontSize: "30px" }} />
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
