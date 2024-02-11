import React from "react";
import Form from "../components/BookingDetails/PaymentForm/Form";
import Card from "../components/BookingDetails/TripDetailCard/Card";
import Header from "../components/BookingDetails/Header";

export default function PaymentDetails() {
  return (
    <div className="container mx-auto px-4 my-12 lg:my-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 lg:grid-flow-col ">
        <Header className="lg:col-span-2 h-fit order-first"/>
        <span className="lg:col-span-2 lg:me-6 order-3 lg:order-2">
          <Form />
        </span>
        <Card />
      </div>
      <hr />
    </div>
  );
}
