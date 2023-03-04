import React from "react";
import TotalBalanceUsage from "@/Components/Domain/Finance/TotalBalanceUsage";
import TagzBalanceUsage from "@/Components/Domain/Finance/TagzBalanceUsage";
import TransactionsTableContainer from "@/Components/Domain/Finance/TransactionsTableContainer";
import { totalBalanceUsage } from "@/mock/totalBalanceUsage";
import { cookies } from "next/headers";
import { getAllTransactions } from "@/services/api/Transactions/handlers";
import { getBalanceUsages } from "@/services/api/TagzData/handlers";

const FinancePage: () => Promise<JSX.Element> = async () => {
  const cookieStore = cookies();
  const transactions = await getAllTransactions(cookieStore);
  const tagzBalanceUsage = await getBalanceUsages(cookieStore)

  return (
    <>
      <div className={"flex flex-col lg:flex-row gap-4"}>
        <TotalBalanceUsage data={totalBalanceUsage} />
        <TagzBalanceUsage data={tagzBalanceUsage} />
      </div>
      <TransactionsTableContainer data={transactions} />
    </>
  );
};

export default FinancePage;
