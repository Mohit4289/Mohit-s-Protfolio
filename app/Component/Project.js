"use client";
import React from "react";
import Image from "next/image";

const Project = () => {
  return (
    <div className="mt-10">
      <h1 className="text-4xl text-center">
        My <span className="font-bold">Project</span>
      </h1>
      <div className="mt-12">
        <div className="container flex gap-10">
          <Image
            src="/positivus.png"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h1 className="font-bold text-2xl mb-4">
              1. Positivus (Marketing Website)
            </h1>
            <p>
              I developed this sleek and modern landing page using Next.js to
              showcase a company focused on digital success. The design features
              a minimalistic layout with a vibrant color scheme that highlights
              key elements like the navigation bar and call-to-action buttons.
              This combination of visuals and Next.js functionality ensures a
              responsive, fast, and user-friendly experience.
            </p>
          </div>
        </div>
        <div className="container flex gap-10 mt-10">
          <Image
            src="/slider.png"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h1 className="font-bold text-2xl mb-4">2. Project Slider</h1>
            <p>
              This project slider is designed to showcase two featured projects
              in an interactive and engaging format. Built with HTML, CSS, and
              JavaScript, it allows users to seamlessly switch between projects
              using navigation buttons. The slider is responsive, ensuring a
              smooth experience across different devices. Each slide includes an
              image and a brief description, providing a quick overview of each
              project’s key features and outcomes.
            </p>
          </div>
        </div>
        <div className="container flex gap-10 mt-10">
          <Image
            src="/movie.png"
            width={400}
            height={400}
            className="rounded-lg"
          />
          <div>
            <h1 className="font-bold text-2xl mb-4">
              3. Movie's Hub (Watching movie online)
            </h1>
            <p>
              I developed this movie-watching website using Next.js to provide
              users with a seamless and fast platform for browsing and streaming
              movies. The site features a modern, user-friendly interface with
              dynamic movie listings, search functionality, and responsive
              design. With Next.js server-side rendering, the website delivers
              optimized performance, ensuring a smooth and efficient
              movie-viewing experience across all devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
