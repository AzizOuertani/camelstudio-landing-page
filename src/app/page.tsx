"use client";
import Hero from "@/components/hero";
import Service from "@/components/services";
import AboutUs from "@/components/aboutUs";
import WorkWithUs from "@/components/workWithUs";
import ContactUs from "@/components/contactUs";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <AboutUs />
      <WorkWithUs />
      <ContactUs />
      <Footer />
    </main>
  );
}
