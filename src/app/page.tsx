"use client";
import Hero from "@/components/hero";
import Service from "@/components/services";
import AboutUs from "@/components/aboutUs";
import WorkWithUs from "@/components/workWithUs";
export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <AboutUs />
      <WorkWithUs />
    </main>
  );
}
