import React from "react";
import { Empty } from "./parts/empty";
import { Table } from "./parts/table";
import { ShoppingForm } from "./parts/form";

import ShoppingViewModel from "./ViewModel";
import { observer } from "mobx-react";
import { Loading  }from "../common/loading";

interface ShoppingViewProps {
  viewModel: ShoppingViewModel;
}
export const ShoppingView =  observer(({ viewModel }: ShoppingViewProps) => {

  const { list, isLoading } = viewModel;
  return (
    <div>
      <ShoppingForm viewModel={viewModel} />
      {isLoading &&  <Loading/>}
      {!isLoading && list.length ? <Table viewModel={viewModel} /> : <Empty viewModel={viewModel} /> }
    </div>
  );
});

export default ShoppingView;
