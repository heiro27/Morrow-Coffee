export type Category =
  | "All"
  | "Coffee"
  | "Non-Coffee"
  | "Pastries"
  | "Merch";

export type Product = {
  name: string;
  slug: string;
  category: Exclude<Category, "All">;
  image: string;
  price?: string;

  description?: string;

  sizes?: string[];

  addOns?: {
    name: string;
    price: string;
  }[];

  gallery?: string[];

  details?: {
    ingredients: string;
    allergens: string;
    nutrition: string;
  };
};

export const categories: Category[] = [
  "All",
  "Coffee",
  "Non-Coffee",
  "Pastries",
  "Merch",
];

export const products: Product[] = [
  {
    name: "Morrow Latte",
    slug: "morrow-latte",
    category: "Coffee",
    image: "/images/latte.jpg",
    price: "150",

    description: "Smooth espresso with steamed milk.",

    sizes: ["Hot", "Iced"],

    addOns: [
      {
        name: "Extra Espresso",
        price: "+₱25",
      },
      {
        name: "Oat Milk",
        price: "+₱20",
      },
      {
        name: "Vanilla Syrup",
        price: "+₱15",
      },
      {
        name: "Caramel Syrup",
        price: "+₱15",
      },
    ],

    gallery: [
      "/images/latte.jpg",
      "/images/latte-2.jpg",
      "/images/latte-3.jpg",
      "/images/coffee-beans.jpg",
    ],

    details: {
      ingredients: "Espresso, steamed milk",
      allergens: "Milk",
      nutrition: "Approximately 120 kcal",
    },
  },

  {
    name: "Cappuccino",
    slug: "cappuccino",
    category: "Coffee",
    image: "/images/cappuccino.jpg",
    price: "150",
    description: "Rich espresso with steamed milk and foam.",
    sizes: ["Hot", "Iced"],
    addOns: [
      {
        name: "Extra Espresso",
        price: "+₱25",
      },
      {
        name: "Oat Milk",
        price: "+₱20",
      },
      {
        name: "Vanilla Syrup",
        price: "+₱15",
      },
    ],
  },

  {
    name: "Spanish Latte",
    slug: "spanish-latte",
    category: "Coffee",
    image: "/images/spanish-latte.jpg",
    price: "160",
    description: "Smooth espresso balanced with sweet condensed milk.",
    sizes: ["Hot", "Iced"],
    addOns: [
      {
        name: "Extra Espresso",
        price: "+₱25",
      },
      {
        name: "Oat Milk",
        price: "+₱20",
      },
    ],
  },

  {
    name: "Caramel Macchiato",
    slug: "caramel-macchiato",
    category: "Coffee",
    image: "/images/caramel-macchiato.jpg",
    price: "160",
    description: "Espresso, creamy milk, and caramel sweetness.",
    sizes: ["Hot", "Iced"],
    addOns: [
      {
        name: "Extra Espresso",
        price: "+₱25",
      },
      {
        name: "Oat Milk",
        price: "+₱20",
      },
      {
        name: "Extra Caramel",
        price: "+₱15",
      },
    ],
  },

  {
    name: "Caramel Macchiato",
    slug: "caramel-macchiato-2",
    category: "Coffee",
    image: "/images/caramel-macchiato-2.jpg",
    price: "160",
    description: "Creamy espresso with a smooth caramel finish.",
    sizes: ["Hot", "Iced"],
  },

  {
    name: "Cold Brew",
    slug: "cold-brew",
    category: "Coffee",
    image: "/images/cold-brew.jpg",
    price: "145",
    description: "Slow-steeped coffee with a bold and smooth taste.",
    sizes: ["Iced"],
  },

  {
    name: "Matcha Bliss",
    slug: "matcha-bliss",
    category: "Non-Coffee",
    image: "/images/matcha.jpg",
    price: "160",
    description: "Ceremonial grade matcha with creamy milk.",
    sizes: ["Hot", "Iced"],
  },

  {
    name: "Chocolate",
    slug: "chocolate",
    category: "Non-Coffee",
    image: "/images/chocolate.jpg",
    price: "150",
    description: "Rich and comforting chocolate drink.",
    sizes: ["Hot", "Iced"],
  },

  {
    name: "Strawberry Matcha",
    slug: "strawberry-matcha",
    category: "Non-Coffee",
    image: "/images/strawberry-matcha.jpg",
    price: "170",
    description: "Creamy matcha layered with sweet strawberry.",
    sizes: ["Iced"],
  },

  {
    name: "Croissant",
    slug: "croissant",
    category: "Pastries",
    image: "/images/croissant.jpg",
    price: "120",
    description: "Buttery and flaky freshly baked croissant.",
  },

  {
    name: "Chocolate Croissant",
    slug: "chocolate-croissant",
    category: "Pastries",
    image: "/images/chocolate-croissant.jpg",
    price: "135",
    description: "Flaky croissant filled with chocolate.",
  },

  {
    name: "Cinnamon Roll",
    slug: "cinnamon-roll",
    category: "Pastries",
    image: "/images/cinnamon-roll.jpg",
    price: "130",
    description: "Soft cinnamon roll with a sweet glaze.",
  },

  {
    name: "Blueberry Muffin",
    slug: "blueberry-muffin",
    category: "Pastries",
    image: "/images/blueberry-muffin.jpg",
    price: "110",
    description: "Soft muffin filled with blueberries.",
  },

  {
    name: "Morrow Tumbler",
    slug: "morrow-tumbler",
    category: "Merch",
    image: "/images/morrow-tumbler.jpg",
    description: "Morrow Coffee reusable tumbler.",
  },

  {
    name: "Coffee Beans",
    slug: "coffee-beans",
    category: "Merch",
    image: "/images/coffee-beans.jpg",
    description: "Freshly roasted coffee beans.",
  },

  {
    name: "Ceramic Mug",
    slug: "ceramic-mug",
    category: "Merch",
    image: "/images/ceramic-mug.jpg",
    description: "Classic Morrow Coffee ceramic mug.",
  },
];