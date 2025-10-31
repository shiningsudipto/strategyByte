import { ReactNode } from "react";
import Header from "./_components/Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default Layout;
