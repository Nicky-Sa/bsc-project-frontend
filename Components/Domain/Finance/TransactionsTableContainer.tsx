import React from "react";
import TransactionsTable from "@/Components/Domain/Finance/TrasnactionsTable";
import DarkContainer from "@/Components/Dashboard/DarkContainer";
import { TransactionsType } from "@/Components/Domain/Finance/types";

type propsType = {
  data: TransactionsType[];
};

const TransactionsTableContainer: React.FC<propsType> = ({data}) => {
  return (
    <DarkContainer className={"w-full flex flex-col gap-4"} size={"free"}>
      <h6 className={"h6"}>تراکنش‌ها</h6>
      <TransactionsTable data={data} />
    </DarkContainer>
  );
};

export default TransactionsTableContainer;
