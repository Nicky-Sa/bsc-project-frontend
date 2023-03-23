import React from "react";
import TransactionsTable from "@/Components/Finance/TrasnactionsTable";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import { transactionsType } from "@/Components/Finance/types";

type propsType = {
  data: transactionsType[];
};

const TransactionsTableContainer: React.FC<propsType> = ({data}) => {
  return (
    <DarkContainer className={"w-full flex flex-col gap-4"} size={"free"}>
      <h6>تراکنش‌ها</h6>
      <TransactionsTable data={data} />
    </DarkContainer>
  );
};

export default TransactionsTableContainer;
