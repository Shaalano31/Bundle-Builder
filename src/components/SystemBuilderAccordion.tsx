import { useState } from "react";
import ProductCard from "./ProductCard";
import {
  cameraProducts,
  planProducts,
  sensorProducts,
  protectionProducts,
} from "../data/products";
import CameraIcon from "../assets/icons/camera.icon";
import SensorIcon from "../assets/icons/sensor.icon";
import ProtectionIcon from "../assets/icons/protection.icon";
import PlanIcon from "../assets/icons/plan.icon";
import ArrowUpIcon from "../assets/icons/arrowup.icon";
import ArrowDownIcon from "../assets/icons/arrowdown.icon";

const steps = [
  {
    icon: <CameraIcon />,
    title: "Choose your cameras",
    products: cameraProducts,
  },
  {
    icon: <PlanIcon />,
    title: "Choose your plan",
    products: planProducts,
  },
  {
    icon: <SensorIcon />,
    title: "Choose your sensors",
    products: sensorProducts,
  },
  {
    icon: <ProtectionIcon />,
    title: "Add extra protection",
    products: protectionProducts,
  },
];

export default function SystemBuilderAccordion() {
  const [activeIndex, setActiveIndex] = useState(0); // Step 1 expanded by default
  const [selectedCameras, setSelectedCameras] = useState<number[]>([]);
  const [selectedPlans, setSelectedPlans] = useState<number[]>([]);
  const [selectedSensors, setSelectedSensors] = useState<number[]>([]);
  const [selectedProtections, setSelectedProtections] = useState<number[]>([]);

  const accordion = [
    {
      selected: selectedCameras,
      setSelected: setSelectedCameras,
    },
    {
      selected: selectedPlans,
      setSelected: setSelectedPlans,
    },
    {
      selected: selectedSensors,
      setSelected: setSelectedSensors,
    },
    {
      selected: selectedProtections,
      setSelected: setSelectedProtections,
    },
  ];
  console.log(selectedCameras.length);
  return (
    <div className="max-w-2xl mx-auto border rounded-lg overflow-hidden">
      {steps.map((step, index) => {
        const { selected, setSelected } = accordion[index];
        return (
          <div
            key={step.title}
            className="border-b last:border-b-0 bg-[#EDF4FF]"
          >
            <button
              className="w-full flex items-start py-5 hover:bg-gray-50"
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            >
              <div className=" w-full">
                <p className="pl-4 text-left text-[#484848] uppercase font-medium justify-start text-xs whitespace-nowrap">
                  Step {index + 1} of {steps.length}
                </p>
                <div className="flex-1 h-px w-full bg-gray-300" />
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center">
                    {step.icon}
                    <p>{step.title}</p>
                  </div>
                  <div className="flex flex-row text-end text-[#4E2FD2] items-center gap-1">
                    {activeIndex === index && <p>{selected.length} selected</p>}
                    <p>
                      {activeIndex === index ? (
                        <ArrowUpIcon />
                      ) : (
                        <ArrowDownIcon />
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </button>

            {activeIndex === index && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {step.products.map((product) => (
                  <ProductCard
                    {...product}
                    key={product.id}
                    selected={selected.includes(product.id)}
                    selectedProducts={selected}
                    setSelectedProducts={setSelected}
                  />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
