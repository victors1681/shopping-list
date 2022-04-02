import React from "react";
import View from "./Shopping";
import ShoppingViewModel from "./ViewModel";
import Model from "./Model";

export const Shopping = () => {
  const model = new Model();
  const viewModel = new ShoppingViewModel(model);

  React.useEffect(()=>{
    model.getAllShopping()
  },[])
  return <View viewModel={viewModel} />;
};
