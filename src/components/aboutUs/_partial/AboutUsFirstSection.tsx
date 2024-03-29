import Image from "next/image";
import React from "react";

const AboutUsFirstSection = () => {
  return (
    <div className="bg-blue" id="aboutUs">
      <div className="mx-auto  ">
        <div className="relative isolate overflow-hidden bg-primary-400 px-6 py-10  sm:px-10 sm:py-24 lg:py-20 xl:px-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
            <div className=" space-y-20 lg:row-start-2 lg:max-w-2xl ">
              <section className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-thrashand  font-bold text-white ">
                  Qui sommes-nous ?
                </h1>
                <p className=" text-xl  leading-8 text-white font-raleway">
                  Une équipe jeune, soudée en quête de nouvelles expériences et
                  de nouveau projets.
                  <br />
                  <span className=" text-2xl text-gray-50 font-bold">
                    Pas de blabla ici.
                  </span>{" "}
                  On code, on design, on résout des problèmes.
                </p>
              </section>
              <section className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-thrashand  font-bold text-white ">
                  Notre équipe ?
                </h1>
                <p className="text-xl  leading-8 text-white font-raleway">
                  Des gens sympas qui aiment ce
                  {" qu'i"}ls font et qui le font bien. On sait ce qui se passe
                  sur le marché européen, et on sait comment {" s'y "}prendre
                  pour des projets qui dépotent.
                </p>
              </section>
              <section className="space-y-2">
                <h1 className="text-4xl sm:text-6xl font-thrashand  font-bold text-white ">
                  Ce {" qu'o"}n sait faire ?
                </h1>
                <p className=" text-xl leading-8 text-white font-raleway">
                  On fait du développement sur mesure, des applications web
                  fluides et des solutions digitales qui marchent. On {" n'"}a
                  pas de formules magiques, juste du bon boulot.
                </p>
              </section>
            </div>
            <Image
              src="/CSTeamInTheDesert.jpg"
              alt="CamelStudio Team In The Desert"
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
