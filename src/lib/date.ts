export function formatMonthYear(dateInput: string | Date): string {
  if (!dateInput) return '';
  const date = typeof dateInput === 'string' ? new Date(dateInput + 'T00:00:00') : dateInput;
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' }).format(date);
}
