import Image from "next/image";
//TODO : fix the responsive
export default function Hero() {
  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-5 z-50 mb-24">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <Image
            src="/Logo.png"
            alt="logo Camel Studio"
            width={500}
            height={500}
          />{" "}
        </div>
      </header>

      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/csTeam.png"
          alt=""
          fill={true}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl py-32 sm:py-48 lg:py-32">
          <div className="text-center justify-between">
            <h1 className="font-raleway text-4xl font-bold tracking-tight text-white sm:text-6xl mb-24">
              Une boîte de devs agiles et résilients
            </h1>

            <div className="inline-flex px-7 py-3.5 items-start justify-center rounded-3xl bg-opacity-10 bg-white backdrop-blur-11 shadow-md space-x-6 mb-24">
              <h1 className="font-raleway text-white text-4xl">🖥 Front</h1>
              <h1 className="font-raleway text-white text-4xl">🛠 Back</h1>
              <h1 className="font-raleway  text-white text-4xl ">
                📱 Web/mobile app
              </h1>
              <h1 className="font-raleway  text-white text-4xl ">🔌 API </h1>
            </div>
            <p className="font-raleway text-4xl text-gray-50 mb-24">
              Au Camel Studio on sait comment garder la tête froide même dans
              les projets les plus chauds. <br /> Pas de bosses, que des
              solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
