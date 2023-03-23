import React from "react";
import TotalBalanceUsage from "@/Components/Finance/TotalBalanceUsage";
import TagzBalanceUsage from "@/Components/Finance/TagzBalanceUsage";
import TransactionsTableContainer from "@/Components/Finance/TransactionsTableContainer";
import { cookies } from "next/headers";
import { getAllTransactions } from "@/services/api/Transactions/handlers";
import { getBalanceUsages } from "@/services/api/TagzData/handlers";
import { getUser } from "@/services/api/User/handlers";

const FinancePage: () => Promise<JSX.Element> = async () => {
  const cookieStore = cookies();
  const transactions = await getAllTransactions(cookieStore);
  const tagzBalanceUsage = await getBalanceUsages(cookieStore);
  const user = await getUser(cookieStore);

  return (
    <>
      <div className={"flex flex-col lg:flex-row gap-4"}>
        <TotalBalanceUsage used={300_000} left={user.currentBalance} />
        <TagzBalanceUsage data={tagzBalanceUsage} />
      </div>
      <TransactionsTableContainer data={transactions} />
    </>
  );
};

export default FinancePage;
