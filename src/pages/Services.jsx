import React from "react";
import { Header } from "../components/Header/Header";
import ServicesCardList from "../components/ServiceCard/ServicesCardList";
import { BookingsList } from "../components/BookingCard/BookingsList";

export const Services = () => {
  return (
    <>
      <Header />
      <ServicesCardList />
      <BookingsList />
    </>
  );
};
