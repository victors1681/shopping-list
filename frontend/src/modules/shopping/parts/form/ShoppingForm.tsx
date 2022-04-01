import React from "react";
import ShoppingViewModel from "../../ViewModel";

interface ShoppingFormProps {
  viewModel: ShoppingViewModel;
}

export const Card: React.FC<ShoppingFormProps> = ({
  viewModel,
}): JSX.Element => {
  return <div>Form </div>;
};

export default Card;
