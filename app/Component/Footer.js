"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";



const Footer = () => {
  return (
    <div className="contact flex gap-6 mt-16">
      <Image src="/partner.jpg" width={600} height={200} className="rounded-lg" />
      <div>
        <h1 className="text-6xl font-bold">Let's Talk for Something Special</h1>
        <p>
          I'd love to hear from you! Whether you have a question, a project in
          mind, or just want to connect, feel free to reach out.
        </p>
        <div className="flex gap-4">
        <Link  href="https://github.com/Mohit4289"><FaGithub  className="w-[30px] h-[30px] mt-4"/></Link>
        <Link  href="https://www.linkedin.com/in/mohit-tiwari-1967b32a5"><FaLinkedin  className="w-[30px] h-[30px] mt-4"/></Link>
        <Link  href="mailto:srttiwari4289@gmail.com"><IoMdMail  className="w-[30px] h-[30px] mt-4"/></Link>
        </div>
      </div>  
    </div>
  );
};

export default Footer;
