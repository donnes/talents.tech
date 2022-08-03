import { Header } from "../header";
import { Footer } from "../footer";

export function AppShell({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
