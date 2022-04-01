import React from "react";
import ShoppingViewModel from "../../ViewModel";

interface ShoppingFormProps {
    viewModel: ShoppingViewModel
}

export const Empty: React.FC<ShoppingFormProps>= ({viewModel}): JSX.Element => {

    return <div>empty component </div>
}

export default Empty;
