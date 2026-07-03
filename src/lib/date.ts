export function formatMonthYear(dateInput: string): string {
  if (!dateInput) return '';
  const date = new Date(dateInput + 'T00:00:00');
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
}
