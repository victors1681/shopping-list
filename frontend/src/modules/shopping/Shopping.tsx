import React from "react";
import { Empty } from "./parts/empty";
import { Table } from "./parts/table";
import { ShoppingForm } from "./parts/form";

import ShoppingViewModel from "./ViewModel";

interface ShoppingViewProps {
  viewModel: ShoppingViewModel;
}
export const ShoppingView = ({ viewModel }: ShoppingViewProps) => {
  return (
    <div>
      <ShoppingForm />
      {/* <Empty viewModel={viewModel} /> */}
      <Table viewModel={viewModel} />
    </div>
  );
};

export default ShoppingView;
