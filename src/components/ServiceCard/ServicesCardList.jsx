import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { getData } from "../../api/api";

const ServicesCardList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await getData();
        const filteredData = response
          .filter(
            (service) =>
              service.serviceCard && Array.isArray(service.serviceCard)
          )
          .flatMap((service) => service.serviceCard);

        setServices(filteredData);
      } catch (error) {
        console.error("Error:", error.message);
        setError("Failed to load services. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="mt-6 p-5">
      <h1 className="text-3xl font-ptSerif font-w400 text-center mb-8">
        WE PROVIDE THE HIGHEST QUALITY SERVICE
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesCardList;
