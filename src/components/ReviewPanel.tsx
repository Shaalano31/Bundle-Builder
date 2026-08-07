import { cameraProducts } from "../data/products";
import type { BuilderSelections } from "../utils/types";

export default function ReviewPanel({
  selectedCameras,
  setSelectedCameras,
  selectedPlans,
  setSelectedPlans,
  selectedSensors,
  setSelectedSensors,
  selectedProtections,
  setSelectedProtections,
}: BuilderSelections) {
  return (
    <div className="flex flex-col max-w-2xl mx-auto border rounded-lg">
      <p>Your security system</p>
      <p>
        Review your personalized protection system designed to keep what matters
        most safe.
      </p>

      {selectedCameras.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-3">Cameras</h3>

          {selectedCameras.map((selected) => {
            const product = cameraProducts.find(
              (product) => product.id === selected.id,
            );

            if (!product) return null;

            return (
              <div
                key={product.id}
                className="flex gap-4 border-b py-4 last:border-b-0"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-24 w-24 object-contain"
                />

                <div className="flex flex-col flex-1">
                  <h4 className="font-semibold">{product.name}</h4>
                  {/* <p className="text-gray-500">{product.price}</p> */}

                  {product.discount && (
                    <div>
                      <p className="text-[#D8392B] line-through">
                        ${product.price}
                      </p>
                      <p className="text-[#575757]">
                        $
                        {(product.price * (1 - product.discount / 100)).toFixed(
                          2,
                        )}
                      </p>
                    </div>
                  )}
                  {!product.discount && (
                    <p className="text-[#575757]">${product.price}</p>
                  )}

                  <div>
                    {selected.counts.map((count) => (
                      <p key={count.color}>
                        {count.color} × {count.quantity}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div></div>
    </div>
  );
}
