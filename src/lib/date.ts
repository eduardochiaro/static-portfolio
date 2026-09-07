function format(dateInput: string, options: Intl.DateTimeFormatOptions): string {
  if (!dateInput) return '';
  const date = new Date(dateInput + 'T00:00:00');
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

export const formatFullDate = (date: string) => format(date, { month: 'short', day: 'numeric', year: 'numeric' });
export const formatMonthYear = (date: string) => format(date, { month: 'short', year: 'numeric' });
