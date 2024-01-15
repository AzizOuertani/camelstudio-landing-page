import { serviceContent } from "./_content/serviceContent";
import Service from "./_partial/Service";

export default function Services() {
  return (
    <section
      id="prestaion"
      aria-label="Les Prestations de CamelStudio"
      className="py-20 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
