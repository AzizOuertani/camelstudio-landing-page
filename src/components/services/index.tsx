import { serviceContent } from "./_content/serviceContent";
import Service from "./_partial/Service";

export default function Services() {
  return (
    <section
      id="prestaion"
      aria-label="Les Prestations de CamelStudio"
      className="py-20 sm:py-14 grid px-4"
    >
      <h1 className="place-self-center text-6xl font-thrashand">
        Nos prestations
      </h1>
      <h2 className="place-self-center text-center text-4xl font-raleway pt-5 font-semi-bold">
        Inconnus de Nous ? Explorez Nos Prestations Exceptionnelles
      </h2>
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {serviceContent.map((service) => (
            <Service
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
