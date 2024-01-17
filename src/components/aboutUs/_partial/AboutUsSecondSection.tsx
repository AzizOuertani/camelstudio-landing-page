import Image from "next/image";
import React from "react";
import CSTeam from "../../../../public/csTeam2.jpg";

const AboutUsSecondSection = () => {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto px-6 lg:pr-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className=" space-y-12 lg:row-start-2 lg:max-w-5xl  ">
              <section>
                <h1 className="text-4xl sm:text-6xl font-thrashand  font-bold text-black ">
                  Pourquoi nous ?
                </h1>

                <p className="mt-6 text-xl  leading-8 text-black">
                  <span className="font-thrashand text-4xl text-gray-800">
                    🛠️ Pas de blabla, que du boulot :
                  </span>{" "}
                  On va droit au but. Pas de promesses vides, juste des
                  résultats concrets.
                </p>
                <p className="mt-6 text-xl  leading-8 text-black">
                  <span className="font-thrashand text-4xl text-gray-800">
                    🚀Jeunes, mais pas novices :
                  </span>{" "}
                  On est jeunes, mais on sait ce {" qu'"}on fait. Une bonne
                  énergie et un bon mindset.
                </p>
                <p className="mt-6 text-xl  leading-8 text-black">
                  <span className="font-thrashand text-4xl text-gray-800">
                    💰Des prix raisonnables :
                  </span>{" "}
                  On est basés en Tunisie, alors nos tarifs sont cool. Qualité
                  pro, sans se ruiner.
                </p>
              </section>
              <section>
                <h1 className=" font-thrashand  font-bold text-black text-4xl sm:text-6xl ">
                  On bosse comment ?
                </h1>
                <p className="mt-6 text-xl leading-8 text-black">
                  Si vous en avez marre des discours pompeux et que vous voulez
                  des résultats tangibles, parlons de votre projet.
                  Contactez-nous et discutons sérieusement de ce que {" l'"}on
                  peut faire ensemble.
                </p>
              </section>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first pt-10  ">
            <Image
              src={CSTeam}
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-primary-400/10 sm:w-[57rem] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSecondSection;
