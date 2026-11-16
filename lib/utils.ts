/** Format a numeric value as currency, defaulting to Nigerian naira. */
export function formatCurrency(
  value: number,
  currency: string = "NGN",
): string {
  try {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  } catch {
    // Keep a readable fallback if the currency code or Intl formatter is invalid.
    return `₦${Number(value).toFixed(2)}`;
  }
}
