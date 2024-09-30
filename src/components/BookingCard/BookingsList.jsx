import React, { useEffect, useState } from "react";
import { BookingCard } from "./BookingCard";
import { getData } from "../../api/api";

export const BookingsList = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const data = await getData("services");

        // Filter and extract bookingCard data
        const filteredData = data
          .filter(
            (booking) =>
              booking.bookingCard && Array.isArray(booking.bookingCard)
          )
          .flatMap((booking) => booking.bookingCard);

        setBookings(filteredData);
      } catch (err) {
        console.error("Error:", err.message);
        setError("Failed to load bookings. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);


  console.log(bookings)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mt-6 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 border-black lg:grid-cols-3 gap-8">
        {bookings.map((booking, index) => (
          <BookingCard key={index} booking={booking} />
        ))}
      </div>
    </div>
  );
};
