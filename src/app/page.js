'use client';
import HomeContact from "@/components/home/home-contact";
import HomeSlider from "@/components/home/home-slider";
import Initiatives from "@/components/home/initiatives";
import VisionValues from "@/components/home/vision-values";
import WhyUs from "@/components/home/why-us";
import { useEffect, useState } from "react";

export default function Home() {
  const [hash, setHash] = useState('');

  useEffect(() => {
    // Function to update the hash state
    const updateHash = () => {
      setHash(window.location.hash);
    };

    // Set the initial hash
    updateHash();

    // Add an event listener to update the hash when it changes
    window.addEventListener('hashchange', updateHash);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('hashchange', updateHash);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries?.slice(1).forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry)
            entry.target.classList.remove('animate__animated', 'animate__fadeInUp');
            setTimeout(() => {
              entry.target.classList.remove('hidden');
              entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }, 50);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [hash]);

  return (
    <>
      <main>
        <HomeSlider />
        <WhyUs />
        <Initiatives />
        <VisionValues />
        <HomeContact />
      </main>
    </>
  );
}
