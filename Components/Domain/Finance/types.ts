export type transactionsType = {
  key: string;
  reason: string;
  amount: number;
  status: "موفق" | "ناموفق" | "درحال بررسی";
  timestamp: string;
};
