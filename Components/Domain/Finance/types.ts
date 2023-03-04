export type transactionsType = {
  id: string;
  reason: string;
  value: number;
  status: "موفق" | "ناموفق" | "درحال بررسی";
  dateTime: string;
};
