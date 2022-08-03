import { Nav } from "../nav";
import { Footer } from "../footer";

export function AppShell({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
