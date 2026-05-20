"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/40 to-black opacity-95" />

        <div className="relative z-10 max-w-4xl">
          <p className="uppercase tracking-[0.3em] text-zinc-300 mb-4 text-sm">
            Personal Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            AHMED <span className="text-red-500">SOLO</span>
          </h1>

          <p className="text-zinc-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Musician • Actor • Beginner Director • Video Editor
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-red-600 text-white px-7 py-3 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg">
              VIEW MY WORK
            </button>

            <button className="border border-red-700 px-7 py-3 rounded-2xl hover:bg-red-950 transition-all duration-300">
              DOWNLOAD CV
            </button>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">ABOUT ME</h2>
            <p className="text-zinc-300 leading-relaxed text-lg mb-4">
              Ahmed Osama Ahmed Alaagib, also known as Ahmed Solo, is a 21-year-old Sudanese student currently studying and residing in Egypt. Media Passionate about acting, music, and media work.
            </p>
            <p className="text-zinc-500 leading-relaxed">
              He gained valuable experience through teamwork in faculty theater activities, student union work, and personal creative projects as an actor, musician, and content creator.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 shadow-2xl border border-zinc-800">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-3xl font-black">21</h3>
                <p className="text-zinc-300 mt-2">Years Old</p>
              </div>

              <div>
                <h3 className="text-3xl font-black">Sudanese</h3>
                <p className="text-zinc-300 mt-2">Nationality</p>
              </div>

              <div>
                <h3 className="text-3xl font-black">Student</h3>
                <p className="text-zinc-300 mt-2">In Egypt</p>
              </div>

              <div>
                <h3 className="text-3xl font-black">Music</h3>
                <p className="text-zinc-300 mt-2">Passion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-4xl font-bold">Experience</h2>
            <p className="text-zinc-500">Creative Journey</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Deputy Media Secretary',
                desc: 'Sudanese Students’ Association – Helwan University (Nov 2024 – Dec 2025).',
              },
              {
                title: 'Faculty Theater Team',
                desc: 'Member of Docteatro – Helwan University (Nov 2023 – May 2024).',
              },
              {
                title: 'Creative Media Work',
                desc: 'Actor, musician, content creator, and beginner director with hands-on media experience.',
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-300 shadow-xl"
              >
                <div className="h-52 bg-gradient-to-br from-zinc-700 to-zinc-950" />

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Team Work',
              'Communication Skills',
              'Acting',
              'Writing',
              'Directing (Beginner)',
              'Social Media Management',
              'Adobe Premiere',
              'CapCut',
              'Canva',
              'Arabic & English',
            ].map((skill, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl text-zinc-300 hover:bg-zinc-800 transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-24 border-t border-zinc-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-black mb-6">GET IN TOUCH</h2>

          <p className="text-zinc-300 text-lg leading-relaxed mb-10">
            Open to creative collaborations, acting opportunities, media projects, and artistic teamwork.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <div className="bg-zinc-950 border border-red-900/40 rounded-3xl p-6 hover:border-red-500 transition-all duration-300">
              <Instagram className="text-red-500 w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Instagram</h3>
              <p className="text-zinc-300">a7mvdz1</p>
            </div>

            <div className="bg-zinc-950 border border-red-900/40 rounded-3xl p-6 hover:border-red-500 transition-all duration-300">
              <Mail className="text-red-500 w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Email</h3>
              <p className="text-zinc-300 break-all">ahmed9xd10@gmail.com</p>
            </div>

            <div className="bg-zinc-950 border border-red-900/40 rounded-3xl p-6 hover:border-red-500 transition-all duration-300">
              <Phone className="text-red-500 w-8 h-8 mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2">Phone / WhatsApp</h3>
              <p className="text-zinc-300">+201552706155</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-8 text-center text-zinc-500 text-sm">
        © 2026 Ahmed Solo. All Rights Reserved.
      </footer>
    </div>
  );
}
