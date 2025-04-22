'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border transition-all duration-300 hover:shadow-xl hover:bg-stone-800 hover:text-stone-200">
      {/* Gambar Card */}
      <Image
        src={imageUrl}
        alt={title}
        width={1200}
        height={900}
        className="w-full object-cover h-68"
      />

      {/* Deskripsi Card */}
      <div className="p-4 hover:text-stone-200 transition-all duration-300">
        <h3 className="text-xl font-semibold mb-2 hover:text-stone-200 transition-all duration-300">{title}</h3>
        <a className="text-justify" href={link} target="_blank" rel="noopener noreferrer">
          {description}
        </a>
        <p className="text-justify text-gray-600 mb-4 hover:text-stone-200 justify-center-safe transition-all duration-300">
        </p>
      </div>
    </div>
  );
}