import { ReactNode } from "react";
import { Content } from "./Content";
import Navbar from "./Navbar";
import { Theme } from "./Theme";
interface Props {
  children: ReactNode;
}
export const Layout = ({ children }: Props) => {
  return (
    <Theme>
      <Navbar />
      <Content>{children}</Content>
    </Theme>
  );
};
