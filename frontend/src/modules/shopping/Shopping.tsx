import React from "react";
import { Empty } from "./parts/empty";
import ShoppingViewModel from "./ViewModel";

interface ShoppingViewProps {
    viewModel: ShoppingViewModel
}
export const ShoppingView = ({viewModel}: ShoppingViewProps) => {

    return <div>
        <Empty viewModel={viewModel}/>
    </div>
}

export default ShoppingView;