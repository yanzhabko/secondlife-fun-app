enum Month {
  January = "01",
  February = "02",
  March = "03",
  April = "04",
  May = "05",
  June = "06",
  July = "07",
  August = "08",
  September = "09",
  October = "10",
  November = "11",
  December = "12",
}

// Convert month index to month string
const getMonthString = (monthIndex: number): string => {
  const months = Object.values(Month);
  return months[monthIndex] || "00";
};

export const formatDate = (dateString: string | undefined) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const day = date.getUTCDate().toString().padStart(2, "0");
  const month = getMonthString(date.getUTCMonth());
  const year = date.getUTCFullYear();

  return `${day}.${month}.${year}`;
};
