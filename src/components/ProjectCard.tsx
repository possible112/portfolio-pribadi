'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

export default function ProjectCard({ title, description, imageUrl, link }: ProjectCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in the viewport
    );

    const element = document.getElementById(title); // Make sure each card has a unique ID
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [title]);

  return (
    <div
      id={title}
      className={`rounded-xl overflow-hidden shadow-lg border transition-all duration-300 cursor-pointer ${isVisible ? 'transform scale-105 bg-stone-800' : ''
        }`}
      onClick={() => link && window.open(link, '_blank')}
    >
      <Image
        src={imageUrl}
        alt={title}
        width={1200}
        height={900}
        className="w-full object-cover h-68"
      />
      <div className="p-4">
        <h3
          className={`text-xl font-bold mb-2 transition-all duration-300 ${isVisible ? 'text-pink-600' : 'text-gray-800'
            }`}
        >
          {title}
        </h3>
        <p
          className={`text-gray-600 text-semibold mb-4 transition-all duration-300 ${isVisible ? 'text-pink-600' : 'text-gray-600'
            }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
