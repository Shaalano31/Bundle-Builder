import TruckIcon from "../assets/icons/truck.icon";
import {
  cameraProducts,
  planProducts,
  protectionProducts,
  sensorProducts,
} from "../data/products";
import type {
  BuilderSelections,
  ProductResponseType,
  ReviewPanelProp,
  SelectedProduct,
} from "../utils/types";
import ReviewPanelProduct from "./ReviewPanelProduct";
import ReviewSection from "./ReviewSection";

function calculateTotals(
  selectedProducts: SelectedProduct[],
  products: ProductResponseType[],
) {
  return selectedProducts.reduce(
    (totals, selected) => {
      const product = products.find((p) => p.id === selected.id);

      if (!product) return totals;

      const quantity = selected.counts.reduce(
        (sum, count) => sum + count.quantity,
        0,
      );

      totals.subtotal += product.price * quantity;

      const discountedPrice = product.discount
        ? product.price * (1 - product.discount / 100)
        : product.price;

      totals.total += discountedPrice * quantity;

      return totals;
    },
    {
      subtotal: 0,
      total: 0,
    },
  );
}

export default function ReviewPanel({
  selectedCameras,
  setSelectedCameras,
  selectedPlans,
  setSelectedPlans,
  selectedSensors,
  setSelectedSensors,
  selectedProtections,
  setSelectedProtections,
  saveSystem,
}: ReviewPanelProp) {
  const cameraTotals = calculateTotals(selectedCameras, cameraProducts);

  const planTotals = calculateTotals(selectedPlans, planProducts);

  const sensorTotals = calculateTotals(selectedSensors, sensorProducts);

  const protectionTotals = calculateTotals(
    selectedProtections,
    protectionProducts,
  );

  const subtotal =
    cameraTotals.subtotal +
    planTotals.subtotal +
    sensorTotals.subtotal +
    protectionTotals.subtotal;

  const discountedTotal =
    cameraTotals.total +
    planTotals.total +
    sensorTotals.total +
    protectionTotals.total;

  const savings = subtotal - discountedTotal;

  return (
    <div className="w-[430px] bg-[#EDF4FF] border rounded-xl overflow-hidden">
      {/* Header */}

      <div className="px-6 py-6 border-b">
        <p className="uppercase text-xs tracking-wider text-gray-500 font-semibold">
          Review
        </p>

        <h1 className="text-4xl font-bold mt-2">Your security system</h1>

        <p className="text-gray-500 mt-3">
          Review your personalized protection system designed to keep what
          matters most safe.
        </p>
      </div>

      {/* Cameras */}

      {selectedCameras.length > 0 && (
        <ReviewSection title="Cameras">
          {selectedCameras.flatMap((selected) => {
            const product = cameraProducts.find((p) => p.id === selected.id);

            if (!product) return [];

            return selected.counts.map((count) => (
              <ReviewPanelProduct
                key={`${selected.id}-${count.color ?? "default"}`}
                product={product}
                count={count}
                setSelectedProducts={setSelectedCameras}
              />
            ));
          })}
        </ReviewSection>
      )}

      {/* Sensors */}

      {selectedSensors.length > 0 && (
        <ReviewSection title="Sensors">
          {selectedSensors.flatMap((selected) => {
            const product = sensorProducts.find((p) => p.id === selected.id);

            if (!product) return [];

            return selected.counts.map((count) => (
              <ReviewPanelProduct
                key={`${selected.id}-${count.color ?? "default"}`}
                product={product}
                count={count}
                setSelectedProducts={setSelectedSensors}
              />
            ));
          })}
        </ReviewSection>
      )}

      {/* Accessories */}

      {selectedProtections.length > 0 && (
        <ReviewSection title="Accessories">
          {selectedProtections.flatMap((selected) => {
            const product = protectionProducts.find(
              (p) => p.id === selected.id,
            );

            if (!product) return [];

            return selected.counts.map((count) => (
              <ReviewPanelProduct
                key={`${selected.id}-${count.color ?? "default"}`}
                product={product}
                count={count}
                setSelectedProducts={setSelectedProtections}
              />
            ));
          })}
        </ReviewSection>
      )}

      {/* Plans */}

      {selectedPlans.length > 0 && (
        <ReviewSection title="Plan">
          {selectedPlans.flatMap((selected) => {
            const product = planProducts.find((p) => p.id === selected.id);

            if (!product) return [];

            return selected.counts.map((count) => (
              <ReviewPanelProduct
                key={`${selected.id}-${count.color ?? "default"}`}
                product={product}
                count={count}
                setSelectedProducts={setSelectedPlans}
              />
            ));
          })}
        </ReviewSection>
      )}

      {/* Shipping */}

      <div className="flex items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <TruckIcon />
          <p className="font-semibold">Fast Shipping</p>
        </div>

        <div className="text-right">
          <p className="line-through text-gray-400">$5.99</p>

          <p className="text-[#4E2FD2] font-semibold">FREE</p>
        </div>
      </div>

      {/* Totals */}

      <div className="px-6 py-6 border-b">
        <div className="flex flex-row justify-between">
          <img
            src="src\assets\images\WarrantyBadge.png"
            className="w-20 h-20"
          />

          <div className="text-right justify-between gap-2 flex flex-row items-end">
            <p className="line-through text-gray-400 text-lg">
              ${subtotal.toFixed(2)}
            </p>

            <p className="text-2xl font-bold text-[#4E2FD2]">
              ${discountedTotal.toFixed(2)}
            </p>
          </div>
        </div>
        <p className="text-green-600 font-medium mb-3">
          Congratulations! You're saving ${savings.toFixed(2)} on your security
          bundle!
        </p>
      </div>

      {/* Checkout */}

      <div className="flex flex-col p-6 justify-center">
        <button className="w-full bg-[#4E2FD2] text-white rounded-xl py-4 font-semibold text-lg hover:bg-[#4327bc] transition">
          Checkout
        </button>

        <button
          className="mt-4 text-gray-500 underline cursor-pointer hover:text-purple-600"
          onClick={saveSystem}
        >
          Save my system for later
        </button>
      </div>
    </div>
  );
}
