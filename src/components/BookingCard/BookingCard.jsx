import React from "react";

export const BookingCard = ({ booking }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg border border-black transform transition-all hover:scale-105 hover:shadow-xl  ">
      <div className="">
        <div className=" w-85 flex items-center justify-center mb-5">
          <img
            src={booking.image}
            alt={booking.name}
            className=" object-cover w-85 h-96"
            width={535}
            height={664}
          />
        </div>
        <h2 className="text-xl font-ptSerif font-w400 text-customRed mb-2 text-center">
          {booking.name.toUpperCase()}
        </h2>
        <p className="text-gray-700 text-base text-center p-5">
          {booking.description}
        </p>
        <div className="text-center mt-4 py-5">
          <button className="bg-subRed text-white font-bold py-2 px-4 rounded">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};
