import { Header } from "../Header";

export type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }:LayoutProps) => {
    return (
      <>
        <Header />
        {children}
      </>
    );
  };
  