import { useState } from "react";
import ReviewPanel from "./components/ReviewPanel";
import SystemBuilderAccordion from "./components/SystemBuilderAccordion";
import type { BuilderSelections, SelectedProduct } from "./utils/types";

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

  return (
    <main className="app flex md:flex-row flex-col gap-10 lg:p-16 p-4 w-full">
      <SystemBuilderAccordion {...builderSelections} />
      <ReviewPanel {...builderSelections} />
    </main>
  );
}

export default App;
