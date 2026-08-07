import type { Dispatch, SetStateAction } from "react";
import type { ProductResponseType, SelectedProduct } from "../utils/types";

type Props = {
  product: ProductResponseType;
  count: SelectedProduct["counts"][number];
  setSelectedProducts: Dispatch<SetStateAction<SelectedProduct[]>>;
};

export default function ReviewPanelProduct({
  product,
  count,
  setSelectedProducts,
}: Props) {
  const unitPrice = product.discount
    ? product.price * (1 - product.discount / 100)
    : product.price;

  const subtotal = unitPrice * count.quantity;

  return (
    <div className="flex items-center">
      <img
        src={product.image}
        alt={product.name}
        className="size-10 object-contain"
      />

      <div className="flex-1">
        <p className="font-medium text-sm text-[#0B0D10]">{product.name}</p>

        {count.color && <p className="text-gray-500">{count.color}</p>}
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setSelectedProducts((prev) =>
              prev
                .map((p) => {
                  if (p.id !== product.id) return p;

                  const counts = p.counts
                    .map((c) =>
                      c.color === count.color
                        ? {
                            ...c,
                            quantity: c.quantity - 1,
                          }
                        : c,
                    )
                    .filter((c) => c.quantity > 0);

                  return {
                    ...p,
                    counts,
                  };
                })
                .filter((p) => p.counts.length > 0),
            );
          }}
        >
          −
        </button>

        <span>{count.quantity}</span>

        <button
          onClick={() => {
            setSelectedProducts((prev) =>
              prev.map((p) => {
                if (p.id !== product.id) return p;

                return {
                  ...p,
                  counts: p.counts.map((c) =>
                    c.color === count.color
                      ? {
                          ...c,
                          quantity: c.quantity + 1,
                        }
                      : c,
                  ),
                };
              }),
            );
          }}
        >
          +
        </button>
      </div>

      <div className="w-24 text-right shrink-0">
        {product.discount ? (
          <>
            <p className="text-{#6F7882} line-through">
              ${(product.price * count.quantity).toFixed(2)}
            </p>

            <p className="text-[#4E2FD2] text-xl font-semibold">
              ${(product.discount * count.quantity).toFixed(2)}
            </p>
          </>
        ) : (
          <p className="text-[#4E2FD2] text-xl font-semibold">
            ${(product.price * count.quantity).toFixed(2)}
          </p>
        )}
      </div>
    </div>
  );
}
