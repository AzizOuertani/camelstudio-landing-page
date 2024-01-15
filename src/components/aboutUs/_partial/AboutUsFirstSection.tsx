import Image from "next/image";
import React from "react";

const AboutUsFirstSection = () => {
  return (
    <div className="bg-blue py-24">
      <div className="mx-auto  ">
        <div className="relative isolate overflow-hidden bg-primary-400 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className=" space-y-12 lg:row-start-2 lg:max-w-2xl ">
              <section>
                <h1 className="text-7xl font-thrashand  font-bold text-white ">
                  Qui sommes-nous ?
                </h1>
                <h3 className="text-3xl tracking-tight text-white ">
                  Une équipe jeune mais pas novice, soudée et qui connaît le
                  marché européen.
                </h3>
                <p className="mt-6 text-xl  leading-8 text-white">
                  <span className="font-thrashand text-4xl text-gray-50">
                    Pas de blabla ici.
                  </span>{" "}
                  On code, on design, on résout des problèmes. Notre équipe ?
                  Des gens sympas qui aiment ce
                  {" qu'i"}ls font et qui le font bien. On sait ce qui se passe
                  sur le marché européen, et on sait comment {" s'y "}prendre
                  pour des projets qui dépotent.
                </p>
              </section>
              <section>
                <h1 className="text-7xl font-thrashand  font-bold text-white ">
                  Ce {" qu'o"}n sait faire ?
                </h1>
                <p className="mt-6 text-xl leading-8 text-white">
                  On fait du développement sur mesure, des applications web
                  fluides et des solutions digitales qui marchent. On {"n'a"}{" "}
                  pas de formules magiques, juste du bon boulot.  On est sympa,
                  mais surtout on est pros.
                </p>
              </section>
            </div>
            <Image
              src="/CSTeamInTheDesert.jpg"
              alt="Product screenshot"
              className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-w-none"
              width={592}
              height={245}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFirstSection;
