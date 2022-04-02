import React from "react";
import View from "./Shopping";
import ShoppingViewModel from "./ViewModel";
import Model from "./Model";

export const Shopping = () => {
 
  const model = React.useMemo(() => new Model(), []);

  const viewModel = React.useMemo(
    () => new ShoppingViewModel(model),
    [model]
  );
 
  React.useEffect(()=>{
    model.getAllShopping()
  },[])
  return <View viewModel={viewModel} />;
};
