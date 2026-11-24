export const getToday = () => {
  const now = new Date();
  const today = new Date(now.toISOString());
  return today.toLocaleDateString('en-CA');
}

export const formatDate = (searchDate: string) => {
  const [year, month, day] = searchDate.split('-');
  return `${year.slice(2)}${month}${day}`;
}
