import type { Product } from "@/types/product";

export const PRODUCTS: Product[] = [
  // --- SHOES (categoryId: "2") ---
  {
    id: "na-1",
    name: "AeroStrike Minimalist Runner",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
    ],
    price: 6800,
    originalPrice: 8500,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 142,
    category: "Shoes",
    categoryId: "2",
    badge: "NEW",
    isNewArrival: true,
    isFeatured: false,
    inStock: true,
    stock: 18,
    variants: [
      {
        id: "size",
        name: "Size",
        options: ["US 8", "US 9", "US 10", "US 11"],
      },
      {
        id: "color",
        name: "Color",
        options: ["Inferno Red", "Stealth Black", "Triple White"],
      },
    ],
    tags: ["shoes", "sneakers", "running", "aerostrike", "athletic", "footwear"],
    description:
      "Engineered for supreme breathability and cloud-soft cushioning. Features ultra-responsive midsole technology and a sleek aerodynamic silhouette.",
  },
  {
    id: "fp-2",
    name: "Vanguard Italian Leather Boots",
    image:
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&q=80",
      "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?w=800&q=80",
    ],
    price: 8900,
    originalPrice: 11000,
    discountPercent: 19,
    rating: 4.9,
    reviewsCount: 178,
    category: "Shoes",
    categoryId: "2",
    badge: "TOP PICK",
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    stock: 12,
    variants: [
      {
        id: "size",
        name: "Size",
        options: ["US 8", "US 9", "US 10", "US 11", "US 12"],
      },
      {
        id: "color",
        name: "Leather",
        options: ["Espresso Brown", "Midnight Black"],
      },
    ],
    tags: ["shoes", "boots", "leather", "vanguard", "italian", "mens"],
    description:
      "Handcrafted Goodyear welted boots made with supple oiled nubuck leather. Goodyear rubber lug outsoles for unmatched all-weather grip.",
  },

  // --- WATCHES (categoryId: "3") ---
  {
    id: "na-2",
    name: "Voyager Chronograph Watch",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80",
    ],
    price: 9400,
    originalPrice: 12000,
    discountPercent: 22,
    rating: 4.9,
    reviewsCount: 88,
    category: "Watches",
    categoryId: "3",
    badge: "NEW",
    isNewArrival: true,
    isFeatured: false,
    inStock: true,
    stock: 14,
    variants: [
      {
        id: "strap",
        name: "Strap Material",
        options: ["Cognac Leather", "Black Croc Leather", "Steel Mesh"],
      },
      {
        id: "dial",
        name: "Dial Size",
        options: ["40mm", "42mm"],
      },
    ],
    tags: ["watch", "chronograph", "voyager", "timepiece", "luxury", "accessories"],
    description:
      "Surgical-grade stainless steel casing with sapphire crystal glass and genuine Italian calfskin leather strap. Water-resistant up to 50 meters.",
  },
  {
    id: "fp-1",
    name: "Apex Series Elite Smartwatch",
    image:
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80",
    ],
    price: 13200,
    originalPrice: 16500,
    discountPercent: 20,
    rating: 5.0,
    reviewsCount: 312,
    category: "Watches",
    categoryId: "3",
    badge: "BESTSELLER",
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    stock: 25,
    variants: [
      {
        id: "finish",
        name: "Case Finish",
        options: ["Space Grey", "Titanium Natural", "Obsidian Black"],
      },
      {
        id: "size",
        name: "Case Size",
        options: ["44mm", "46mm"],
      },
    ],
    tags: ["watch", "smartwatch", "apex", "fitness", "gps", "gadgets"],
    description:
      "AMOLED always-on display, ECG monitoring, optical heart-rate sensor, and multi-satellite GPS navigation with 14-day extended battery life.",
  },
  {
    id: "fp-6",
    name: "Chronos Heritage Aviator Watch",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80",
    ],
    price: 10200,
    originalPrice: 13000,
    discountPercent: 22,
    rating: 4.8,
    reviewsCount: 126,
    category: "Watches",
    categoryId: "3",
    badge: "EDITOR'S PICK",
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    stock: 9,
    variants: [
      {
        id: "dial",
        name: "Dial Color",
        options: ["Aero Blue", "Phantom Black", "Champagne Gold"],
      },
    ],
    tags: ["watch", "aviator", "chronos", "heritage", "pilot", "luxury"],
    description:
      "Inspired by mid-century pilot chronographs. Features luminous dial markers, rotating bezel, and a rugged vegetable-tanned leather wristband.",
  },

  // --- ELECTRONICS (categoryId: "6") ---
  {
    id: "na-3",
    name: "Aura Pro Wireless Headphones",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80",
    ],
    price: 11500,
    originalPrice: 14500,
    discountPercent: 21,
    rating: 4.9,
    reviewsCount: 210,
    category: "Electronics",
    categoryId: "6",
    badge: "NEW",
    isNewArrival: true,
    isFeatured: false,
    inStock: true,
    stock: 20,
    variants: [
      {
        id: "color",
        name: "Color",
        options: ["Matte Black", "Silver Mist", "Midnight Navy"],
      },
    ],
    tags: ["headphones", "audio", "wireless", "anc", "aura", "electronics"],
    description:
      "Industry-leading active noise cancellation paired with custom 40mm beryllium drivers. Up to 40 hours of continuous playtime on a single charge.",
  },
  {
    id: "fp-4",
    name: "SonicPulse Studio Earbuds",
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80",
      "https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?w=800&q=80",
    ],
    price: 7500,
    originalPrice: 9500,
    discountPercent: 21,
    rating: 4.7,
    reviewsCount: 245,
    category: "Electronics",
    categoryId: "6",
    badge: "HOT DEAL",
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    stock: 30,
    variants: [
      {
        id: "color",
        name: "Color",
        options: ["Ceramic White", "Graphite Black", "Sage Green"],
      },
    ],
    tags: ["earbuds", "audio", "sonicpulse", "bluetooth", "wireless", "electronics"],
    description:
      "Spatial audio with dynamic head tracking and hybrid active noise cancellation. Wireless charging case with 32-hour combined battery longevity.",
  },

  // --- BAGS (categoryId: "4") ---
  {
    id: "na-4",
    name: "Nomad Canvas & Leather Pack",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    ],
    price: 5200,
    originalPrice: 6500,
    discountPercent: 20,
    rating: 4.7,
    reviewsCount: 65,
    category: "Bags",
    categoryId: "4",
    badge: "NEW",
    isNewArrival: true,
    isFeatured: false,
    inStock: true,
    stock: 16,
    variants: [
      {
        id: "color",
        name: "Color",
        options: ["Charcoal Gray", "Waxed Olive", "Desert Tan"],
      },
      {
        id: "capacity",
        name: "Capacity",
        options: ["20L Everyday", "28L Travel"],
      },
    ],
    tags: ["bag", "backpack", "canvas", "leather", "nomad", "travel"],
    description:
      "Weather-resistant waxed canvas with full-grain leather accents. Equipped with a padded 16-inch laptop compartment and anti-theft rear pocket.",
  },
  {
    id: "fp-3",
    name: "Luxe Minimalist Crossbody Bag",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80",
    ],
    price: 6400,
    originalPrice: 8000,
    discountPercent: 20,
    rating: 4.8,
    reviewsCount: 114,
    category: "Bags",
    categoryId: "4",
    badge: "TRENDING",
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    stock: 11,
    variants: [
      {
        id: "color",
        name: "Color",
        options: ["Caramel Tan", "Obsidian Black", "Forest Green"],
      },
    ],
    tags: ["bag", "crossbody", "luxury", "leather", "handbag", "fashion"],
    description:
      "Architectural silhouette with custom brushed brass hardware. Features magnetic flap closure, dual internal organizers, and adjustable strap.",
  },

  // --- CLOTHING (categoryId: "1") ---
  {
    id: "na-5",
    name: "Urban Oversized Heavy Hoodie",
    image:
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=800&q=80",
      "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=80",
    ],
    price: 4600,
    originalPrice: 5800,
    discountPercent: 21,
    rating: 4.6,
    reviewsCount: 94,
    category: "Clothing",
    categoryId: "1",
    badge: "NEW",
    isNewArrival: true,
    isFeatured: false,
    inStock: true,
    stock: 22,
    variants: [
      {
        id: "size",
        name: "Size",
        options: ["S", "M", "L", "XL", "XXL"],
      },
      {
        id: "color",
        name: "Color",
        options: ["Washed Slate", "Bone White", "Faded Black"],
      },
    ],
    tags: ["clothing", "hoodie", "streetwear", "urban", "heavyweight", "fleece"],
    description:
      "Crafted from premium 450 GSM heavyweight French terry cotton. Features double-layered hood and relaxed contemporary drop-shoulder cut.",
  },
  {
    id: "fp-5",
    name: "Tailored Merino Wool Overcoat",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=80",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80",
    ],
    price: 14800,
    originalPrice: 18500,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 79,
    category: "Clothing",
    categoryId: "1",
    badge: "PREMIUM",
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    stock: 8,
    variants: [
      {
        id: "size",
        name: "Size",
        options: ["38R", "40R", "42R", "44R"],
      },
      {
        id: "color",
        name: "Color",
        options: ["Camel", "Charcoal Melange", "Dark Navy"],
      },
    ],
    tags: ["clothing", "coat", "wool", "overcoat", "tailored", "winter"],
    description:
      "100% fine Australian Merino wool crafted into a refined single-breasted classic silhouette with satin lining and horn button fastenings.",
  },

  // --- ACCESSORIES (categoryId: "5") ---
  {
    id: "na-6",
    name: "Solstice Polarized Sunglasses",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80",
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80",
    ],
    price: 3800,
    originalPrice: 4800,
    discountPercent: 21,
    rating: 4.8,
    reviewsCount: 52,
    category: "Accessories",
    categoryId: "5",
    badge: "NEW",
    isNewArrival: true,
    isFeatured: false,
    inStock: true,
    stock: 15,
    variants: [
      {
        id: "frame",
        name: "Frame Style",
        options: ["Matte Gold", "Brushed Gunmetal", "Gloss Black"],
      },
      {
        id: "lens",
        name: "Lens Tint",
        options: ["Polarized Green", "Mirror Amber", "Smoke Grey"],
      },
    ],
    tags: ["accessories", "sunglasses", "eyewear", "polarized", "solstice", "summer"],
    description:
      "Ultralight titanium frame with 100% UV400 polarized gradient lenses. Combines vintage aesthetics with high-performance modern durability.",
  },

  // --- BEAUTY (categoryId: "7") ---
  {
    id: "pr-beauty-1",
    name: "Botanical Restorative Facial Elixir",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      "https://images.unsplash.com/photo-1608248597359-0f0477bf9494?w=800&q=80",
    ],
    price: 3400,
    originalPrice: 4200,
    discountPercent: 19,
    rating: 4.8,
    reviewsCount: 164,
    category: "Beauty",
    categoryId: "7",
    badge: "ORGANIC",
    inStock: true,
    stock: 24,
    variants: [
      {
        id: "size",
        name: "Volume",
        options: ["30ml Daily", "50ml Reserve"],
      },
    ],
    tags: ["beauty", "skincare", "serum", "botanical", "elixir", "organic"],
    description:
      "Cold-pressed organic botanical oils blended with squalane and rosehip fruit extracts. Restores natural hydration and reinforces skin barrier.",
  },

  // --- SPORTS (categoryId: "8") ---
  {
    id: "pr-sports-1",
    name: "Pro-Grip Hex Rubber Dumbbells",
    image:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&q=80",
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80",
    ],
    price: 5600,
    originalPrice: 7000,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 89,
    category: "Sports",
    categoryId: "8",
    inStock: true,
    stock: 14,
    variants: [
      {
        id: "weight",
        name: "Weight Pair",
        options: ["10kg Pair", "15kg Pair", "20kg Pair"],
      },
    ],
    tags: ["sports", "fitness", "dumbbells", "gym", "workout", "weights"],
    description:
      "Commercial-grade heavy duty hex dumbbells with non-slip knurled chrome handles and shock-absorbing virgin rubber casing.",
  },

  // --- MOBILES (categoryId: "9") ---
  {
    id: "pr-mobiles-1",
    name: "Horizon Pro 5G Ultra Smartphone",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=800&q=80",
    ],
    price: 189000,
    originalPrice: 210000,
    discountPercent: 10,
    rating: 4.9,
    reviewsCount: 340,
    category: "Mobiles",
    categoryId: "9",
    badge: "FLAGSHIP",
    inStock: true,
    stock: 7,
    variants: [
      {
        id: "storage",
        name: "Internal Storage",
        options: ["256GB", "512GB", "1TB"],
      },
      {
        id: "color",
        name: "Color",
        options: ["Space Grey", "Titanium Natural", "Cosmic Blue"],
      },
    ],
    tags: ["mobiles", "phone", "smartphone", "5g", "flagship", "horizon"],
    description:
      "Next-generation 4nm processor, 120Hz LTPO AMOLED display, quad-lens 108MP camera array with periscope optical zoom, and 65W fast wireless charging.",
  },

  // --- GROCERIES (categoryId: "10") ---
  {
    id: "pr-groceries-1",
    name: "Artisan Single-Origin Roast Coffee",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    ],
    price: 1850,
    originalPrice: 2200,
    discountPercent: 16,
    rating: 4.8,
    reviewsCount: 73,
    category: "Groceries",
    categoryId: "10",
    inStock: true,
    stock: 35,
    variants: [
      {
        id: "roast",
        name: "Roast Profile",
        options: ["Medium Roast", "Dark Espresso", "Light Floral"],
      },
      {
        id: "grind",
        name: "Grind Type",
        options: ["Whole Bean", "Filter Grind", "Espresso Fine"],
      },
    ],
    tags: ["groceries", "coffee", "artisan", "organic", "beans", "beverage"],
    description:
      "Ethically sourced, high-altitude Ethiopian single-origin Arabica beans roasted locally in micro-batches for notes of jasmine, bergamot, and chocolate.",
  },

  // --- KIDS (categoryId: "11") ---
  {
    id: "pr-kids-1",
    name: "Eco-Wooden Educational Discovery Blocks",
    image:
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=800&q=80",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
    ],
    price: 2800,
    originalPrice: 3500,
    discountPercent: 20,
    rating: 4.9,
    reviewsCount: 46,
    category: "Kids",
    categoryId: "11",
    inStock: true,
    stock: 19,
    variants: [
      {
        id: "set",
        name: "Set Size",
        options: ["50-Piece Classic", "100-Piece Mega"],
      },
    ],
    tags: ["kids", "toys", "wooden", "blocks", "educational", "montessori"],
    description:
      "Crafted from sustainable beechwood and finished with child-safe, non-toxic water-based paints. Inspires open-ended creative construction and spatial learning.",
  },

  // --- FURNITURE (categoryId: "12") ---
  {
    id: "pr-furniture-1",
    name: "Nordic Minimalist Oak Lounge Chair",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    ],
    price: 32000,
    originalPrice: 38000,
    discountPercent: 16,
    rating: 4.8,
    reviewsCount: 38,
    category: "Furniture",
    categoryId: "12",
    badge: "HANDCRAFTED",
    inStock: true,
    stock: 6,
    variants: [
      {
        id: "cushion",
        name: "Cushion Color",
        options: ["Warm Charcoal", "Sandstone Beige", "Forest Sage"],
      },
    ],
    tags: ["furniture", "chair", "lounge", "nordic", "oak", "interior"],
    description:
      "Solid European oak frame with ergonomic curved backrest and high-density foam cushioning upholstered in textured Scandinavian linen.",
  },
];

export const NEW_ARRIVALS = PRODUCTS.filter((p) => p.isNewArrival);
export const NEW_ARRIVALS_PRODUCTS = NEW_ARRIVALS;
export const FEATURED_PRODUCTS = PRODUCTS.filter((p) => p.isFeatured);
export const ALL_PRODUCTS = PRODUCTS;
