import React from "react";
type ServiceType = {
  icon: string;
  title: string;
  description: string;
};
const Service = ({ icon, title, description }: ServiceType) => {
  return (
    <li className="rounded-2xl border border-gray-200 p-8">
      <h2 className="text-4xl">{icon}</h2>
      <h3 className="mt-6 font-semibold text-gray-900 font-raleway text-xl">
        {title}
      </h3>
      <p className="mt-2 font-raleway text-gray-700 font-raleway text-lg">
        {description}
      </p>
    </li>
  );
};

export default Service;
