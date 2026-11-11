import type { HeroSlideItem } from "@/types/banner";

export const HERO_SLIDES: HeroSlideItem[] = [
  {
    id: "slide-1",
    tag: "TRENDING NOW",
    title: "Discover Your Style",
    subtitle: "Urban & Contemporary",
    description: "Explore the latest designer trends and everyday luxury essentials.",
    ctaText: "Shop Now",
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=80",
    route: "/products",
    category: "Clothing",
  },
  {
    id: "slide-2",
    tag: "TECH & SOUND",
    title: "Upgrade Your Lifestyle",
    subtitle: "High Fidelity Audio",
    description: "Find high-performance products that make everyday living better.",
    ctaText: "Explore Collection",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&q=80",
    route: "/products",
    category: "Electronics",
  },
  {
    id: "slide-3",
    tag: "NEW DROP",
    title: "New Season, New Arrivals",
    subtitle: "Curated Masterpieces",
    description: "Discover the latest luxury timepieces and accessories in our collection.",
    ctaText: "Discover Now",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80",
    route: "/products",
    category: "Watches",
  },
  {
    id: "slide-4",
    tag: "LIMITED TIME",
    title: "Exclusive Deals",
    subtitle: "Up to 40% Off",
    description: "Find great products at attractive prices before stock runs out.",
    ctaText: "Shop Deals",
    image:
      "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&q=80",
    route: "/products",
    category: "Shoes",
  },
];
