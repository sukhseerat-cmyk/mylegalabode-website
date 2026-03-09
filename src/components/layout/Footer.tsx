import { Link } from "react-router-dom";
import { Scale, Mail } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Problem", href: "/problem" },
  { label: "Solution", href: "/solution" },
  { label: "Features", href: "/features" },
  { label: "Schedule Demo", href: "/demo" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4 max-w-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Scale className="w-4 h-4 text-accent-foreground" />
              </div>
              <span className="font-serif font-bold text-lg text-primary-foreground">
                MyLegalAbode
              </span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              AI-powered legal practice platform for Indian advocates and law
              firms. Replacing fragmented tools with one unified system.
            </p>
            <a
              href="mailto:hello@mylegalabode.com"
              className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors"
            >
              <Mail className="w-4 h-4" />
              hello@mylegalabode.com
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-2.5">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-primary-foreground/65 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-primary-foreground/45 text-sm">
            &copy; {new Date().getFullYear()} MyLegalAbode. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <p className="text-accent text-sm font-semibold">
              Launching June 30, 2026
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
