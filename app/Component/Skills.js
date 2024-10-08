"use client"
import React from 'react'
import { FaJsSquare } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills">
      <h1 className="text-4xl text-center">My <span className="font-bold">Skills</span></h1>
      <div className="logo flex justify-center flex-wrap gap-14  p-4 mt-6">
      <FaJsSquare className="w-[140px] h-[140px]"/>
      <FaHtml5 className="w-[140px] h-[140px]"/>
      <FaCss3 className="w-[140px] h-[140px]"/>
      <SiTailwindcss className="w-[140px] h-[140px]"/>
      <FaReact className="w-[140px] h-[140px]"/>
      <SiNextdotjs className="w-[140px] h-[140px]"/>
      <FaPython className="w-[140px] h-[140px]"/>
      <SiDjango className="w-[140px] h-[140px]"/>
      <FaGitAlt className="w-[140px] h-[140px]"/>
      <SiMysql className="w-[140px] h-[140px]"/>
      </div>
    </div>
  )
}

export default Skills
