import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { HiXMark, HiBars3 } from "react-icons/hi2";
import Link from "next/link";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <section className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                src="/Logo.png"
                alt="Logo Camel Studio"
                width={200}
                height={50}
                priority
                layout="responsive"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <HiBars3 className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 font-raleway">
            <Link
              href="#prestaion"
              className="text-2xl font-semibold leading-6 text-white"
            >
              Prestations
            </Link>
            <Link
              href="#aboutUs"
              className="text-2xl font-semibold leading-6 text-white"
            >
              À Propos
            </Link>
            <Link
              href="#workWithUs"
              className="text-2xl font-semibold leading-6 text-white"
            >
              Travailler Avec Nous
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  src="/Logo.png"
                  alt="Logo Camel Studio"
                  width={200}
                  height={50}
                  layout="responsive"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <HiXMark className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6 font-raleway">
                  <Link
                    href="#prestaion"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Prestations
                  </Link>
                  <Link
                    href="#aboutUs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    À propos
                  </Link>
                  <Link
                    href="#workWithUs"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Travailler Avec Nous
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>

      <main className="relative isolate overflow-hidden pt-14">
        <Image
          src="/csTeam.png"
          alt="Camel Studio Team"
          width={1280}
          height={960}
          priority
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />

        <article className="mx-auto max-w-6xl px-8 py-32 sm:py-48 lg:py-32 text-center">
          <div className="  inline-flex px-2 sm:px-7 py-3.5 items-start justify-center rounded-3xl bg-opacity-10 bg-white backdrop-blur-11 sm:space-x-6 space-x-1 shadow-md  mb-6 text-white text-base sm:text-xl">
            <h1>
              🖥 <span className="font-raleway">Front</span>
            </h1>
            <h1>
              🛠 <span className="font-raleway">Back</span>
            </h1>
            <h1>
              📱 <span className="font-raleway">Web/mobile app</span>
            </h1>
            <h1>
              🔌 <span className="font-raleway">API</span>
            </h1>
          </div>
          <h1 className="font-raleway  text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
            Une boîte de devs agiles et résilients
            <br />
          </h1>
          <p className="font-raleway text-2xl text-gray-50  max-w-6xl mb-10 ">
            Au Camel Studio on sait comment garder la tête froide même dans les
            projets les plus chauds. <br /> Pas de bosses, que des solutions.
          </p>
          <Link
            href="mailto:contact@camelstudiotunisie.com"
            className="rounded-md hover:bg-primary-400 hover:text-white px-8 py-4 text-xl font-semibold hover:text-white shadow-sm bg-white text-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Contactez-nous
          </Link>
        </article>
      </main>
    </section>
  );
}
