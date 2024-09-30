import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-black transform transition-all hover:scale-105 hover:shadow-xl p-4">
      <div className="px-6 py-4">
        <div className="flex items-center justify-center mb-5">
          <img src={service.image} alt={service.name} width={76} height={88} />
        </div>
        <h2 className=" text-xl font-ptSerif font-w400  text-customRed  mb-2">
          {service.name}
        </h2>

        <p className="text-gray-700 text-base">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
