import { PRODUCTS } from "@/constants/products";
import type { Product, ProductSearchSuggestion } from "@/types/product";

/**
 * Searches local products by matching query against name, category, and tags.
 * Modularized so it can be swapped to an external backend search API in the future.
 */
export async function searchProducts(
  query: string,
  limit: number = 20
): Promise<ProductSearchSuggestion[]> {
  const cleanQuery = query.trim().toLowerCase();

  if (!cleanQuery) {
    return [];
  }

  // Simulate a slight network latency if desired, or return synchronously resolved promise
  const matches = PRODUCTS.filter((product: Product) => {
    const nameMatch = product.name.toLowerCase().includes(cleanQuery);
    const categoryMatch = product.category?.toLowerCase().includes(cleanQuery);
    const tagMatch = product.tags?.some((tag) =>
      tag.toLowerCase().includes(cleanQuery)
    );

    return nameMatch || categoryMatch || Boolean(tagMatch);
  });

  return matches.slice(0, limit).map((p) => ({
    id: p.id,
    name: p.name,
    image: p.image,
    category: p.category || "General",
    categoryId: p.categoryId,
    price: p.price,
  }));
}

