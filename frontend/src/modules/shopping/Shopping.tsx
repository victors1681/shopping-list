import React from "react";
import { Empty } from "./parts/empty";
import { Table } from "./parts/table";
import { ShoppingForm } from "./parts/form";

import ShoppingViewModel from "./ViewModel";
import { observer } from "mobx-react";

interface ShoppingViewProps {
  viewModel: ShoppingViewModel;
}
export const ShoppingView =  observer(({ viewModel }: ShoppingViewProps) => {

  const { list } = viewModel;
  return (
    <div>
      <ShoppingForm viewModel={viewModel} />
      {list.length ? <Table viewModel={viewModel} /> : <Empty viewModel={viewModel} /> }
    </div>
  );
});

export default ShoppingView;
