import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  MessageSquare,
  FileText,
  BarChart3,
  Smartphone,
  AlertCircle,
  Clock,
  Users,
  MonitorSmartphone,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Index() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <ProblemSection />
      <PlatformSection />
      <FeaturesOverview />
      <CTASection />
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[88vh] flex items-center bg-gradient-to-br from-white via-white to-secondary/40 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[560px] h-[560px] bg-accent/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Left: Text */}
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-sm font-semibold">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Launching June 30 &middot; Early Access Open
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="font-serif text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-foreground leading-[1.12] text-balance"
            >
              The Operating System for{" "}
              <span className="text-accent">Modern Legal Practice</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="text-xl text-muted-foreground leading-relaxed max-w-lg"
            >
              AI-powered case management, client transparency, and workflow
              automation — built for Indian advocates.
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="text-muted-foreground leading-relaxed"
            >
              Manage cases, hearings, documents, clients, and billing in one
              unified platform.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 text-base h-12 px-8 font-semibold shadow-lg shadow-accent/20"
              >
                <Link to="/demo">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="h-12 px-8 text-base border border-border font-medium"
              >
                <Link to="/demo">Join Early Access</Link>
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeUp}
              className="flex items-center gap-3 pt-1"
            >
              <div className="flex -space-x-2">
                {["A", "P", "R", "S"].map((l) => (
                  <div
                    key={l}
                    className="w-7 h-7 rounded-full bg-primary text-primary-foreground border-2 border-white flex items-center justify-center text-[10px] font-bold"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Trusted by early-adopter advocates across India
              </p>
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <div className="relative">
      {/* Laptop */}
      <div className="rounded-2xl border border-border shadow-2xl overflow-hidden bg-white ring-1 ring-black/5">
        {/* Browser chrome */}
        <div className="bg-secondary/70 border-b border-border px-4 py-2.5 flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/70" />
            <div className="w-3 h-3 rounded-full bg-accent/70" />
            <div className="w-3 h-3 rounded-full bg-green-400/70" />
          </div>
          <div className="flex-1 bg-white/70 rounded-md px-3 py-0.5 text-[11px] text-muted-foreground text-center">
            app.mylegalabode.com
          </div>
        </div>

        {/* Dashboard UI */}
        <div className="bg-[oklch(0.985_0.004_255)] p-4 space-y-3">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-muted-foreground">Good morning</p>
              <p className="font-serif font-bold text-foreground text-sm">
                Adv. Sharma &middot; Dashboard
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <span className="text-[9px] font-bold text-primary-foreground">
                  RS
                </span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Active Cases", value: "42", sub: "+3 this week", color: "text-primary" },
              { label: "Hearings Today", value: "5", sub: "2 urgent", color: "text-accent" },
              { label: "Revenue MTD", value: "₹2.4L", sub: "+12% MoM", color: "text-green-600" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-2.5 border border-border/60 shadow-sm">
                <p className={`font-bold text-base ${s.color}`}>{s.value}</p>
                <p className="text-[10px] text-muted-foreground leading-tight">{s.label}</p>
                <p className="text-[9px] text-muted-foreground/60 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>

          {/* Cases list */}
          <div className="bg-white rounded-xl border border-border/60 shadow-sm overflow-hidden">
            <div className="px-3 py-2 border-b border-border/40">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Recent Cases
              </p>
            </div>
            {[
              { name: "Sharma vs State of Delhi", court: "Delhi HC", status: "Hearing", color: "bg-blue-100 text-blue-700" },
              { name: "Kumar Matrimonial Dispute", court: "Family Court", status: "Filed", color: "bg-green-100 text-green-700" },
              { name: "Patel Property Transfer", court: "Civil Court", status: "Judgment", color: "bg-accent/15 text-accent" },
            ].map((c) => (
              <div key={c.name} className="flex items-center justify-between px-3 py-2 border-b border-border/30 last:border-0">
                <div>
                  <p className="text-[11px] font-medium text-foreground">{c.name}</p>
                  <p className="text-[9px] text-muted-foreground">{c.court}</p>
                </div>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${c.color}`}>
                  {c.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating phone mockup */}
      <div className="absolute -bottom-6 -right-10 w-[130px] bg-white rounded-2xl border border-border shadow-2xl overflow-hidden ring-1 ring-black/5">
        <div className="bg-primary px-3 py-2.5">
          <p className="text-[9px] text-primary-foreground/60 font-medium">CLIENT APP</p>
          <p className="text-primary-foreground font-serif font-bold text-xs">My Cases</p>
        </div>
        <div className="p-2.5 space-y-2">
          {[
            { name: "Sharma vs State", status: "Hearing Soon", dot: "bg-accent" },
            { name: "Property Case", status: "Docs Required", dot: "bg-blue-500" },
          ].map((c) => (
            <div key={c.name} className="flex items-start gap-1.5">
              <div className={`w-1.5 h-1.5 ${c.dot} rounded-full mt-1 flex-shrink-0`} />
              <div>
                <p className="text-[9px] font-semibold text-foreground leading-tight">{c.name}</p>
                <p className="text-[8px] text-muted-foreground">{c.status}</p>
              </div>
            </div>
          ))}
          <div className="pt-1.5 border-t border-border/50">
            <div className="bg-accent/10 rounded-lg px-2 py-1">
              <p className="text-[9px] text-accent font-semibold">Next Hearing</p>
              <p className="text-[8px] text-muted-foreground">Mon, 10:00 AM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -top-4 -left-6 bg-white rounded-xl border border-border shadow-lg px-3 py-2 flex items-center gap-2"
      >
        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
        </div>
        <div>
          <p className="text-[10px] font-semibold text-foreground">Hearing Reminder</p>
          <p className="text-[9px] text-muted-foreground">Delhi HC — Today 10:00 AM</p>
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Problem teaser ─────────────────────────────────────────── */
function ProblemSection() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Operational Fragmentation",
      desc: "Lawyers rely on disconnected tools like WhatsApp, email, and Excel — none of which talk to each other.",
    },
    {
      icon: Users,
      title: "Client Transparency Gap",
      desc: "Clients have little to no visibility into their case progress, leading to constant follow-up calls.",
    },
    {
      icon: Clock,
      title: "Administrative Time Drain",
      desc: "Manual coordination consumes up to 40% of an advocate's billable time every single day.",
    },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            The Problem
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-balance">
            Legal Practice Still Runs on Fragmented Tools
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="bg-white/5 border-white/10 hover:bg-white/8 transition-colors h-full">
                <CardContent className="pt-7 pb-7">
                  <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center mb-5">
                    <p.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-serif font-semibold text-lg text-primary-foreground mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-primary-foreground/65 text-sm leading-relaxed">
                    {p.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Link
            to="/problem"
            className="text-accent hover:text-accent/80 text-sm font-medium underline underline-offset-4 transition-colors"
          >
            Read the full analysis &rarr;
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Platform overview ──────────────────────────────────────── */
function PlatformSection() {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            The Solution
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance mb-5">
            A Unified Legal Operations Platform
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Two connected applications creating a complete digital legal
            ecosystem for lawyers and clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Card className="border-2 border-primary/15 hover:border-primary/30 transition-colors h-full overflow-hidden">
              <div className="h-2 bg-primary w-full" />
              <CardContent className="pt-7 pb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <MonitorSmartphone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Application 1
                    </p>
                    <h3 className="font-serif font-bold text-xl text-foreground">
                      Lawyer Web Dashboard
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A browser-based command center for lawyers and law firms.
                  Manage every case, client, hearing, document, and payment in
                  one place.
                </p>
                <ul className="space-y-2">
                  {[
                    "Case lifecycle tracking",
                    "Automated hearing reminders",
                    "Document intelligence",
                    "Revenue & billing dashboard",
                    "Team task management",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <Card className="border-2 border-accent/25 hover:border-accent/45 transition-colors h-full overflow-hidden">
              <div className="h-2 bg-accent w-full" />
              <CardContent className="pt-7 pb-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      Application 2
                    </p>
                    <h3 className="font-serif font-bold text-xl text-foreground">
                      Client Mobile App
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A dedicated mobile app where clients can track cases,
                  communicate with lawyers, upload documents, and stay informed
                  at every step.
                </p>
                <ul className="space-y-2">
                  {[
                    "Real-time case progress tracking",
                    "Secure lawyer messaging",
                    "Document upload & sharing",
                    "Hearing reminders & calendar",
                    "Online payments & invoices",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── Features overview ─────────────────────────────────────── */
function FeaturesOverview() {
  const features = [
    {
      icon: Calendar,
      title: "Case & Hearing Management",
      desc: "Full case lifecycle from filing to judgment with automated reminders and visual case boards.",
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      desc: "Centralised inbox replacing WhatsApp with case-linked conversations and message templates.",
    },
    {
      icon: FileText,
      title: "Document Intelligence",
      desc: "Auto-classification, semantic search, OCR scanning, and secure client document sharing.",
    },
    {
      icon: BarChart3,
      title: "Practice Intelligence",
      desc: "Analytics, payment tracking, revenue dashboards, and firm-wide operational visibility.",
    },
    {
      icon: Smartphone,
      title: "Client Mobile App",
      desc: "Invitation-only client app for transparency, payments, document upload, and multilingual support.",
    },
  ];

  return (
    <section className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-3">
            Features
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance mb-4">
            Everything a Modern Law Firm Needs
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Five integrated pillars replacing every fragmented tool in your
            practice.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <Card className="bg-white border-border hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 h-full">
                <CardContent className="pt-7 pb-7">
                  <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center mb-5">
                    <f.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif font-semibold text-base text-foreground mb-2">
                    {f.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <Button asChild variant="secondary" className="border border-border font-medium">
            <Link to="/features">
              Explore all features
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Final CTA ──────────────────────────────────────────────── */
function CTASection() {
  return (
    <section className="py-28 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="space-y-7"
        >
          <span className="inline-flex items-center gap-2 bg-accent/10 text-accent border border-accent/20 rounded-full px-4 py-1.5 text-sm font-semibold">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Now accepting early access applications
          </span>

          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground text-balance leading-tight">
            Be Among the First Law Firms to Experience MyLegalAbode
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            We&apos;re onboarding a limited number of forward-thinking law firms
            for early access. Schedule a personalised demo and see the platform
            before the June 30 launch.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base h-12 px-8 font-semibold shadow-lg shadow-accent/20"
            >
              <Link to="/demo">
                Request Early Access
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 px-8 text-base border border-border font-medium"
            >
              <Link to="/features">Explore Features</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
Now create all the inner pages:
