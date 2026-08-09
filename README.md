# Frontend Take-Home Bundle Builder

A React + TypeScript bundle builder based on the provided Figma design. The application lets users configure a security system through a multi-step builder while keeping a live review panel synchronized with product selections, variants, quantities, pricing, and bundle savings.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Local JSON data
- Browser `localStorage` for persistence

## Getting Started

### Requirements

- Node.js 20+ recommended
- npm 10 or later

### Install

Clone the repository and install the dependencies:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd <PROJECT_DIRECTORY>
npm install
```

### Start the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, normally:

```text
http://localhost:5173
```

## Architecture & Decisions

### Shared state is owned by `App`

The builder and review panel both need to read and modify the same selections, so the bundle state is lifted to `App` and passed to the child components.

I intentionally did not introduce Redux, Zustand, or another state-management library. The application has a relatively small amount of shared state and only a couple of major consumers, so React state keeps the data flow straightforward and explicit.

### Data-driven product catalog

Product information is stored in JSON rather than being hardcoded into the UI components.

The components consume the product data and render cards generically. Optional properties such as discounts and color/variant options are rendered only when present.

This makes adding or changing products possible without changing the product-card markup.

### Separate product data from selection state

Selected products store their IDs and quantities rather than copying the complete product objects into the selection state.

A selection follows this general structure:

```ts
{
  id: string;
  counts: {
    color: string | null;
    quantity: number;
  }
  [];
}
```

This is particularly important for products with variants because each color can maintain an independent quantity.

For example:

```text
Camera
├── Black × 2
└── White × 1
```

The review panel then resolves the product information from the catalog using the selected product ID.

### Local JSON instead of an API

The product catalog and initial selection data are stored locally as JSON.

A real production application would likely retrieve products, prices, inventory, and promotions from an API. For this take-home, a local JSON source keeps the project self-contained, easy to run, and satisfies the data-driven requirement without adding unnecessary backend complexity.

### Persistence

The "Save my system for later" functionality uses browser `localStorage`.

When the user chooses to save their system, the current selection state is serialized and stored locally. On a subsequent page load, the saved configuration is restored.

This was chosen because the requirement specifically calls for client-side persistence and does not require authentication or server-side storage.

## Tradeoffs

- **React state instead of a state-management library:** simpler for the current scope, but Context or a dedicated state-management solution could become preferable if the application grows significantly.
- **Local JSON instead of an API:** keeps the take-home self-contained, but a production application would normally use a backend for product and pricing data.
- **ID-based selections:** avoids duplicating product metadata in application state, but requires product lookups when rendering the review panel.
- **Array lookups:** products are currently resolved with array operations such as `.find()`. This is perfectly adequate for the small catalog in this prototype, but a larger catalog could use an ID-indexed map for faster lookups.
- **Client-side persistence:** `localStorage` works well for this prototype, but it is device/browser-specific and would not provide cross-device persistence.

## Incomplete / Out of Scope

The following were intentionally left as prototype-level functionality because they were not required by the take-home:

- Checkout/payment processing is a placeholder.
- There is no authentication or user account system.
- Saved configurations are stored only in the current browser through `localStorage`.
- There is no backend/API or database.
- Inventory and product availability are not validated against a server.
- A small number of visual refinements and responsive edge cases remain. Given the time constraints, I prioritized the core functionality and interactions while leaving some final UI polish for future iteration.
