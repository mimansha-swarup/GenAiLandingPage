import React from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
const featuresList = [
  "Free Edit",
  "Interactive",
  "Easy Interface",
  "Compare to other",
];

const Features = () => {
  return (
    <div>
      {featuresList?.map((feature) => (
        <div key={feature} className="list-item">
          <span>{feature}</span> <FaArrowTrendDown />{" "}
        </div>
      ))}
    </div>
  );
};

export default Features;
