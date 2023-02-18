export type TransactionsType = {
  key: string;
  reason: string;
  amount: number;
  status: "موفق" | "ناموفق" | "درحال بررسی";
  timestamp: string;
};
