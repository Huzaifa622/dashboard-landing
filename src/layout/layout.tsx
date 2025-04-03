import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/nav-bar";
import { Outlet } from "react-router-dom";
import { cn } from "@/lib/utils";

function Layout() {
  return (
    <div className={cn("") } >
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
