import { useState } from "react";
import ProductCard from "./ProductCard";
import CameraIcon from "../assets/icons/camera.icon";
import SensorIcon from "../assets/icons/sensor.icon";
import ProtectionIcon from "../assets/icons/protection.icon";
import PlanIcon from "../assets/icons/plan.icon";
import ArrowUpIcon from "../assets/icons/arrowup.icon";
import ArrowDownIcon from "../assets/icons/arrowdown.icon";
import type { BuilderSelections } from "../utils/types";
import { catalog } from "../data/product";

const steps = [
  {
    icon: <CameraIcon />,
    title: "Choose your cameras",
    products: catalog.cameras,
  },
  {
    icon: <PlanIcon />,
    title: "Choose your plan",
    products: catalog.plans,
  },
  {
    icon: <SensorIcon />,
    title: "Choose your sensors",
    products: catalog.sensors,
  },
  {
    icon: <ProtectionIcon />,
    title: "Add extra protection",
    products: catalog.protections,
  },
];

export default function SystemBuilderAccordion({
  selectedCameras,
  setSelectedCameras,
  selectedPlans,
  setSelectedPlans,
  selectedSensors,
  setSelectedSensors,
  selectedProtections,
  setSelectedProtections,
}: BuilderSelections) {
  const [activeIndex, setActiveIndex] = useState(0); // Step 1 expanded by default

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
    <div className="md:w-2/3 border rounded-lg overflow-hidden">
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
              <div className="flex flex-col items-center w-full">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 justify-center">
                  {step.products.map((product, productIndex) => {
                    const isLast = productIndex === step.products.length - 1;
                    const isOdd = step.products.length % 2 !== 0;

                    return (
                      <div
                        key={product.id}
                        className={
                          isOdd && isLast
                            ? "sm:col-span-2 sm:justify-center col-span-1 sm:flex"
                            : ""
                        }
                      >
                        <ProductCard
                          {...product}
                          key={product.id}
                          selected={selected.some(
                            (selectedProduct) =>
                              selectedProduct.id === product.id,
                          )}
                          selectedProducts={selected}
                          setSelectedProducts={setSelected}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="flex w-full self-center">
                  <button
                    className="text-[#4E2FD2] self-center font-semibold text-lg border border-[#4E2FD2]"
                    onClick={() => setActiveIndex(index + 1)}
                  >
                    Next: Choose your plan
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
