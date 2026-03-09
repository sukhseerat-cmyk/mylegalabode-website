import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Announcement Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 h-10 bg-primary flex items-center justify-center px-4">
        <p className="text-primary-foreground text-xs sm:text-sm text-center">
          <span className="text-primary-foreground/70">
            Currently in development —{" "}
          </span>
          <span className="text-accent font-semibold">
            Early access launching June 30
          </span>
          <span className="hidden sm:inline text-primary-foreground/50">
            {" "}
            &middot;{" "}
          </span>
          <Link
            to="/demo"
            className="hidden sm:inline text-primary-foreground/70 hover:text-accent underline underline-offset-2 transition-colors"
          >
            Join the waitlist
          </Link>
        </p>
      </div>

      {/* Navbar sits below the banner */}
      <Navbar />

      {/* Main content — offset for banner (40px) + navbar (~64px) */}
      <main className="flex-1 pt-[104px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
