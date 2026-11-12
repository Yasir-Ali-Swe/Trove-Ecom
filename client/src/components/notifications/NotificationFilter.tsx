import FilterChips from "@/components/ui/FilterChips";
import { NOTIFICATION_FILTERS, type NotificationFilterKey } from "@/utils/notifications";

interface NotificationFilterProps {
  value: NotificationFilterKey;
  onChange: (key: NotificationFilterKey) => void;
  counts: Record<NotificationFilterKey, number>;
}

export default function NotificationFilter({
  value,
  onChange,
  counts,
}: NotificationFilterProps) {
  return (
    <FilterChips
      filters={NOTIFICATION_FILTERS}
      value={value}
      onChange={onChange}
      counts={counts}
    />
  );
}
