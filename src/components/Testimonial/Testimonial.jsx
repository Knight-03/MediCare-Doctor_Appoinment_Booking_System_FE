import React from "react";
import TestimonialCard from "./TestimonialCard";
function Testimonial() {
  return (
    <section>
      <div className="container">
        <div className="xl:w-[470px] mx-auto">
          <h2 className="heading text-center">What Our Patient Say</h2>
          <p className="text__para text-center">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>
        </div>
        <TestimonialCard />
      </div>
    </section>
  );
}

export default Testimonial;
