'use client';

import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { Mail, Github, Linkedin, Instagram, Copyright } from 'lucide-react';

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-stone-800 text-white px-6">
        <div className="w-full grid md:grid-cols-2 gap-8 items-center py-16 md:px-24">
          {/* Left: Text */}
          <div className="space-y-4 text-center md:text-left">
            <h1 className="text-pink-600 text-4xl md:text-6xl font-bold">
              <span className="text-gray-100">Hi, I&apos;m</span> Andi Agung
            </h1>
            <h2 className="text-lg md:text-xl font-semibold text-gray-100">
              <Typewriter
                options={{
                  strings: ['a Backend Developer', 'a Data Enthusiast', 'an IoT Explorer'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </h2>
            <p className="text-gray-300 animate-typing">
              A fresh graduate in Informatics from Kalimantan Institute of Technology
              with a strong passion for IoT, Data Scientist, and AI Engineering.
            </p>
            <div className="flex gap-4 pt-2 justify-center md:justify-start">
              <a href="#about">
                <Button variant="outline" className="border-white text-stone-800 hover:bg-stone-400 hover:text-[#282c54]">
                  Read More
                </Button>
              </a>
              {/* Show CV Button with Link */}
              <a
                href="https://drive.google.com/file/d/18yJ_JFugEZrNP4e12fed-NCbBnrvdEdd/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-pink-600 text-white hover:bg-pink-800">
                  Show CV
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative flex justify-center items-center mt-8 md:mt-0">
            <div className="relative w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full shadow-[0_0_60px_#7b2a50] ring-4 ring-pink-800/50 ring-offset-2 ring-offset-[#3f1d2d] animate-pulse-ring">
              <Image
                src="/profile.jpg"
                alt="Andi Agung"
                width={700}
                height={700}
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>


      {/* About Section */}
      <section id="about" className="scroll-mt-32 w-full flex flex-col md:flex-row items-center justify-center bg-stone-300 text-white px-10 py-16">
        {/* Profil Gambar */}
        <div className="flex justify-center items-center mb-8 md:mb-0">
          <div className="relative w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-md ring-teal-800 ring-offset-2 ring-offset-[#3f3e1d]">
            <Image
              src="/profile2.jpg"
              alt="Andi Agung"
              width={350}
              height={350}
              className="rounded-md object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Deskripsi Teks */}
        <div className="max-w-5xl mx-auto px-4 space-y-4">
          <h2 className="text-4xl text-stone-800 font-bold text-center mb-8">About Me</h2>
          <p className="text-gray-800 font-semibold text-justify">
            Hola, I&apos;m Andi Muhammad Agung Ramadhani Syam & u can call me Andi or Agung.
            A fresh graduate in Informatics from Kalimantan Institute of Technology and currently interning at Telkomsel Area 4
            Pamasuka as a backend developer and I&apos;ve experience in full-stack development at MSIB Batch 5.
          </p>
          <p className="text-gray-800 font-semibold text-justify">
            I&apos;ve strong passion especially in backend development, data engineering, and IoT. Two times reached the final stage at GEMASTIK XVI & XVII for me competing means to fight smart, lose strong, and come back stronger. I&apos;m eager to contribute to impactful projects, and continue developing both as an individual and within a team. My goal is to continuously improve my technical and professional skills in information technology and contribute to the creation of innovative and cutting-edge technologies.
          </p>
        </div>
      </section>

      {/* experiences Section */}
      <section id="experiences" className="scroll-mt-32 py-24 bg-stone-600 text-center px-6">
        <h2 className="text-4xl font-semibold text-gray-200 mb-16">Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-12 gap-8">
          {/* Experience 1 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-xl text-gray-200 font-semibold mb-2">Backend Developer Intern</h3>
            <p className="text-pink-600 mb-2">Telkomsel Area 4 Pamasuka | February 2025 - May 2025</p>
            <p className="text-gray-200">
              Build and Design API for chatbot telegram integration with LLM&apos;S.
            </p>
          </div>

          {/* Experience 2 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-xl text-gray-200 font-semibold mb-2">Teaching Assistant</h3>
            <p className="text-pink-600 mb-2">Institut Teknologi Kalimantan | February 2022 - May 2024</p>
            <p className="text-gray-200">
              Guided and assisted students in understanding course materials through structured instruction and support. The courses I taught include Digital Systems and Programming Algorithm.
            </p>
          </div>

          {/* Experience 3 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-xl text-gray-200 font-semibold mb-2">Project Manager</h3>
            <p className="text-pink-600 mb-2">Xplora Tech | January 2024 - January 2025</p>
            <p className="text-gray-200">
              Maintained regular communication with clients, ensuring their requirements were met and providing regular progress updates.
            </p>
          </div>

          {/* Experience 4 */}
          <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300">
            <h3 className="text-xl text-gray-200 font-semibold mb-2">Full-Stack Developer Intern</h3>
            <p className="text-pink-600 mb-2">MSIB Batch 5 Skillvul | August 2023</p>
            <p className="text-gray-200">
              Developed a course website with business logic, user authentication, and database integration with React, Node.js, Express.js, and MySQL.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-mt-32 max-w-6xl mx-auto px-4 py-24">
        <h2 className="text-4xl text-stone-600 font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          <ProjectCard
            title="AviSent"
            description="Smart Bird Pest Control Prototype Based on Object Detection to Support Food Security. Click for more details>>>."
            imageUrl="/avisent.jpg"
            link="https://drive.google.com/file/d/1zlUo-YXbRThWlDaB5h4hIQUrgs8hAGUm/view?usp=sharing"
          />
          <ProjectCard
            title="RoaDEH"
            description="Prototype of Road Potential Inspection System with On-Board Camera Based on Internet of Things (IoT).  Click for more details>>>."
            imageUrl="/roadeh.png"
            link="https://drive.google.com/file/d/1VSa780GvEliLHlTo8D342BMnc2gTPigE/view?usp=sharing"
          />
          <ProjectCard
            title="Papaya Fruit Ripeness Detection"
            description="Design and Construction of Papaya (Carica papaya) Fruit Maturity Classification System Based on UHF RFID RSSI Parameters and Fruit Size Click for more details>>>."
            imageUrl="/pari.png"
            link="https://drive.google.com/file/d/10Yd6-s-4xo1D6irG9hrXxuOYAVce5Kve/view?usp=sharing"
          />
          <ProjectCard
            title="Geoelectric Switchbox Based on Arduino Mega"
            description="This tool may allow users to easily change the configuration of electrodes connected to a power source or measuring instrument by using switching controlled by the Arduino Mega. Click for more details>>>."
            imageUrl="/switchbox.png"
            link="https://drive.google.com/file/d/11JDK1mbTbwFXzQv4OIiqh64WWDp3sklo/view?usp=sharing"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-24 flex flex-col justify-end items-center bg-stone-800 text-center px-4 py-24">
        <h2 className="text-3xl text-gray-200 font-semibold mb-8">Get in touch with me</h2>
        <div className="flex justify-center items-center space-x-6 relative">
          {/* Email Icon */}
          <a href="a.agung112@gmail.com" className="group mb-20 relative">
            <Mail className="w-12 h-12 text-red-600 transition-all duration-300 ease-in-out transform group-hover:scale-150 group-hover:rotate-12 group-hover:shadow-xl group-hover:text-white" />
            <div className="hidden group-hover:block absolute bg-stone-100 text-red-600 p-2 rounded-md mt-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              a.agung112@gmail.com
            </div>
          </a>

          {/* LinkedIn Icon */}
          <a href="https://www.linkedin.com/in/andiagung12" className="group mb-20 relative">
            <Linkedin className="w-12 h-12 text-blue-600 transition-all duration-300 ease-in-out transform group-hover:scale-150 group-hover:-rotate-12 group-hover:shadow-xl group-hover:text-white" />
            <div className="hidden group-hover:block absolute bg-stone-200 text-blue-600 p-2 rounded-md mt-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              andiagung12
            </div>
          </a>

          {/* GitHub Icon */}
          <a href="https://github.com/possible112" className="group mb-20 relative">
            <Github className="w-12 h-12 text-emerald-600 transition-all duration-300 ease-in-out transform group-hover:scale-150 group-hover:rotate-12 group-hover:shadow-xl group-hover:text-white" />
            <div className="hidden group-hover:block absolute bg-stone-200 text-emerald-600 p-2 rounded-md mt-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              possible112
            </div>
          </a>

          {/* Instagram Icon */}
          <a href="https://www.instagram.com/andiaguung.__/" className="group mb-20 relative">
            <Instagram className="w-12 h-12 text-pink-600 transition-all duration-300 ease-in-out transform group-hover:scale-150 group-hover:-rotate-12 group-hover:shadow-xl group-hover:text-white" />
            <div className="hidden group-hover:block absolute bg-stone-200 text-pink-600 p-2 rounded-md mt-2 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              @andiaguung.__
            </div>
          </a>
        </div>
        <div className="flex justify-center items-center mt-auto space-x-6">
          <Copyright className="w-10 h-10 text-white transition-all duration-300 ease-in-out transform group-hover:scale-50 group-hover:shadow-lg" />
          <h3 className="text-gray-200 font-semibold">2025 Andi Agung. All rights reserved!</h3>
        </div>
      </section>

    </main>
  );
}
