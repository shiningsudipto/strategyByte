import { ReactNode } from "react";
import Header from "./_components/Header";
import ScrollToTop from "@/components/shared/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Header />
      {children}
      <ScrollToTop />
    </main>
  );
};

export default Layout;
