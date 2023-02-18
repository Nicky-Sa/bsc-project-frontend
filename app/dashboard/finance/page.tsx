import React from "react";
import { transactions } from "@/mock/transactions";
import TotalBalanceUsage from "@/Components/Domain/Finance/TotalBalanceUsage";
import TagzBalanceUsage from "@/Components/Domain/Finance/TagzBalanceUsage";
import { tagzBalanceUsage } from "@/mock/tagzBalanceUsage";
import TransactionsTableContainer from "@/Components/Domain/Finance/TransactionsTableContainer";
import { totalBalanceUsage } from "@/mock/totalBalanceUsage";

const DashboardPage: React.FC = () => {
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

export default DashboardPage;
