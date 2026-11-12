import FilterChips from "@/components/ui/FilterChips";
import { FILTERS, type FilterKey } from "@/utils/orders";

interface OrderStatusFilterProps {
  value: FilterKey;
  onChange: (key: FilterKey) => void;
  counts: Record<FilterKey, number>;
}

export default function OrderStatusFilter({
  value,
  onChange,
  counts,
}: OrderStatusFilterProps) {
  return (
    <FilterChips
      filters={FILTERS}
      value={value}
      onChange={onChange}
      counts={counts}
    />
  );
}
