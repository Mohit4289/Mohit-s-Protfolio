"use client"
import React from 'react'
import Header from './Component/Header'
import Skills from './Component/Skills'
import About from './Component/About'
import Project from './Component/Project'
import Footer from './Component/Footer'

export default function Home() {
  return (
    <div>
      <Header />
      <Skills />
      <About />
      <Project />
      <Footer />
    </div>
  );
}
