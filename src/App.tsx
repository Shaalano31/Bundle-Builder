import { useEffect, useState } from "react";
import ReviewPanel from "./components/ReviewPanel";
import SystemBuilderAccordion from "./components/SystemBuilderAccordion";
import type { BuilderSelections, SelectedProduct } from "./utils/types";
import initialData from "./data/initial.json";

function App() {
  const [selectedCameras, setSelectedCameras] = useState<SelectedProduct[]>([]);
  const [selectedPlans, setSelectedPlans] = useState<SelectedProduct[]>([]);
  const [selectedSensors, setSelectedSensors] = useState<SelectedProduct[]>([]);
  const [selectedProtections, setSelectedProtections] = useState<
    SelectedProduct[]
  >([]);

  const builderSelections: BuilderSelections = {
    selectedCameras,
    setSelectedCameras,
    selectedPlans,
    setSelectedPlans,
    selectedSensors,
    setSelectedSensors,
    selectedProtections,
    setSelectedProtections,
  };

  const STORAGE_KEY = "security-system-builder";

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      const {
        selectedCameras,
        selectedPlans,
        selectedSensors,
        selectedProtections,
      } = initialData;

      setSelectedCameras(selectedCameras ?? []);
      setSelectedPlans(selectedPlans ?? []);
      setSelectedSensors(selectedSensors ?? []);
      setSelectedProtections(selectedProtections ?? []);
    } else {
      try {
        const {
          selectedCameras,
          selectedPlans,
          selectedSensors,
          selectedProtections,
        } = JSON.parse(saved);

        setSelectedCameras(selectedCameras ?? []);
        setSelectedPlans(selectedPlans ?? []);
        setSelectedSensors(selectedSensors ?? []);
        setSelectedProtections(selectedProtections ?? []);
      } catch (error) {
        console.error("Failed to load saved system:", error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const saveSystem = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        selectedCameras,
        selectedPlans,
        selectedSensors,
        selectedProtections,
      }),
    );
  };

  return (
    <main className="app flex sm:flex-row flex-col gap-10 lg:p-16 p-4 w-full">
      <h2 className="sm:hidden font-bold text-[#1F1F1F] text-3xl text-center">
        Let’s get started!
      </h2>
      <SystemBuilderAccordion {...builderSelections} />
      <ReviewPanel {...builderSelections} saveSystem={saveSystem} />
    </main>
  );
}

export default App;
