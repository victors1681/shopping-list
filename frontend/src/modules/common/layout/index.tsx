import React from "react";
import View from "./Layout";

interface LayoutProps {
  children: JSX.Element | string | React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return <View>{children}</View>;
};

export default Layout;
