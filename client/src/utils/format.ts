/**
 * Formats a numeric price into localized PKR currency string
 * e.g. formatPrice(4500) => "Rs. 4,500"
 */
export function formatPrice(amount: number): string {
  return `Rs. ${amount.toLocaleString("en-PK", {
    maximumFractionDigits: 0,
  })}`;
}
