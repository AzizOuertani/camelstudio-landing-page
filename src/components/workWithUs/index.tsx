import Image from "next/image";
import React from "react";
import TeamConf from "../../../public/Team_Conf.jpg";
const WorkWithUs = () => {
  return (
    <main className="relative bg-primary-400" id="workWithUs">
      <section className="mx-auto max-w-9xl lg:flex lg:justify-between lg:pr-24 lg:ml-80 xl:justify-end">
        <section className="lg:flex  lg:shrink  xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2 relative h-80 lg:-ml-80 lg:h-auto lg:w-full lg:grow xl:ml-0">
          <Image
            className="absolute inset-0 max-w-none h-full w-full object-cover"
            src={TeamConf}
            alt="Team Camel Studio"
          />
        </section>
        <section className="px-6 xl:contents font-raleway ">
          <article className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8  lg:mr-0 lg:w-full lg:max-w-3xl xl:flex-none  xl:w-1/2 text-white">
            <h1 className=" text-4xl mt-2  font-bold text-white font-thrashand sm:text-6xl ">
              Développer votre projet avec le Camel Studio
            </h1>
            <p className="mt-6 text-xl leading-8">
              Chez Camel Studio, on croit fermement que la force {" d'"}une
              équipe réside dans sa cohésion. Notre équipe ne se contente pas
              {" d'"}être une bande de collègues, mais une véritable famille de
              devs.
            </p>
            <div className="mt-10 grid text-xl leading-7  lg:max-w-none">
              <p>
                Avec nous, vous faites le choix d’avoir toute une équipe soudée
                prête à faire briller votre vision. Même si chaque membre de
                notre équipe bosse sur des projets différents, {" l'"}esprit
                {" d'"}équipe reste intact.
              </p>
              <p className="mt-8 ">
                On comprend que chaque projet ait des besoins spécifiques,
                {" c'"}est pourquoi on offre deux options flexibles pour
                répondre à vos attentes.
              </p>
              <div className=" grid grid-cols-1 xl:grid-cols-2	 text-white space-y-6 xl:space-y-0 xl:space-x-6 mt-6">
                <div className="rounded-2xl max-w-xl lg:max-w-md border border-gray-200 p-8">
                  <h2 className="text-3xl sm:text-4xl">💪👩‍💻🚀</h2>
                  <h3 className="mt-6 text-4xl font-semibold font-thrashand sm:text-5xl">
                    Option 1,
                    <br /> vous avez déjà une équipe à booster :
                  </h3>
                  <p className="mt-2  ">
                    Vous avez déjà une équipe en place et vous voulez la booster
                    ? Aucun problème ! Prenez {" l'"}un de nos développeurs, et
                    non seulement vous aurez un professionnel dédié, mais vous
                    aurez aussi accès à {" l'"}expertise collective de toute
                    notre équipe qui le soutient et l’épaule en coulisses. 
                  </p>
                </div>

                <div className="rounded-2xl  max-w-xl lg:max-w-md border border-gray-200 p-8">
                  <h2 className="text-3xl sm:text-4xl">🤝👨‍💻🌐</h2>
                  <h3 className="mt-6 text-4xl font-semibold font-thrashand sm:text-5xl">
                    Option 2,
                    <br /> votre équipe {" c'"}est nous :
                  </h3>
                  <p className="mt-2  ">
                    Vous préférez déléguer {" l'"}intégralité de votre projet à
                    notre équipe ? Laisse-nous prendre les rênes. Confiez-nous
                    votre vision, et notre équipe de développement mettra en
                    œuvre chaque ligne de code avec soin, du concept à la
                    réalisation.
                  </p>
                </div>
              </div>
              <p className="mt-6">
                Chez Camel Studio, on est fiers de notre esprit {" d'"}équipe et
                on est prêts à vous accompagner, que vous ayez besoin {" d'"}un
                renfort ponctuel ou d’une conception complète. Faites équipe
                avec nous, et ensemble, on fera de votre vision une réalité.
                🚀🐪
              </p>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
};

export default WorkWithUs;
