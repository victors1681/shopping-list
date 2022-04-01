import React from "react";
import View from "./Shopping";
import ShoppingViewModel from "./ViewModel";
import Model from "./Model";

export const Shopping = () => {
  const model = new Model();
  const viewModel = new ShoppingViewModel(model);

  return <View viewModel={viewModel} />;
};
