import { useState } from "react";
import ProductCard from "./ProductCard";
import {
  cameraProducts,
  planProducts,
  sensorProducts,
  protectionProducts,
} from "../data/products";

const steps = [
  {
    title: "Choose your cameras",
    products: cameraProducts,
  },
  {
    title: "Choose your plan",
    products: planProducts,
  },
  {
    title: "Choose your sensors",
    products: sensorProducts,
  },
  {
    title: "Add extra protection",
    products: protectionProducts,
  },
];

export default function SystemBuilderAccordion() {
  const [activeIndex, setActiveIndex] = useState(0); // Step 1 expanded by default

  return (
    <div className="max-w-2xl mx-auto border rounded-lg overflow-hidden">
      {steps.map((step, index) => (
        <div key={step.title} className="border-b last:border-b-0 bg-[#EDF4FF]">
          <button
            className="w-full flex items-center justify-between p-5 text-left font-semibold hover:bg-gray-50"
            onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
          >
            <span>
              Step {index + 1} of {steps.length} <h3>{step.title}</h3>
            </span>

            <span>{activeIndex === index ? "−" : "+"}</span>
          </button>

          {activeIndex === index && (
            <div className="grid grid-cols-2 gap-4">
              {step.products.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
