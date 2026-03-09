import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MonitorSmartphone, Smartphone, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

export default function SolutionPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-28 bg-gradient-to-br from-white to-secondary/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            The Solution
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-7"
          >
            A Unified Legal Operations Platform
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            MyLegalAbode connects lawyers, law firms, and clients in one
            integrated system — replacing every fragmented tool with a single
            source of truth.
          </motion.p>
        </div>
      </section>

      {/* Two apps */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-primary/15 h-full overflow-hidden">
                <div className="h-1.5 bg-primary" />
                <CardContent className="pt-8 pb-8">
                  <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center mb-6">
                    <MonitorSmartphone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                    Application 1
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    Lawyer Web Dashboard
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-7">
                    A browser-based command center built for advocates and law
                    firms. Everything from case tracking to billing in one clean,
                    powerful interface.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Case lifecycle tracking (Filing → Hearing → Judgment)",
                      "Hearing calendar with automated reminders",
                      "Conflict detection for overlapping hearings",
                      "Trello-style visual case board",
                      "Centralised messaging inbox",
                      "Document hub with OCR & semantic search",
                      "Revenue dashboard & invoicing",
                      "Staff task assignment & workflow management",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-2 border-accent/25 h-full overflow-hidden">
                <div className="h-1.5 bg-accent" />
                <CardContent className="pt-8 pb-8">
                  <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center mb-6">
                    <Smartphone className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-2">
                    Application 2
                  </p>
                  <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                    Client Mobile App
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-7">
                    An invitation-only mobile application where clients get full
                    transparency into their cases, communicate securely with their
                    lawyers, and manage everything from one place.
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Real-time case progress tracking",
                      "View upcoming hearings & deadlines",
                      "Direct secure messaging with lawyers",
                      "Document upload directly to case files",
                      "Automated case update notifications",
                      "Online invoice payments & receipts",
                      "AI assistant explaining case progress",
                      "Multilingual support (English, Hindi, Punjabi)",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* How they connect */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary/50 rounded-3xl p-10 border border-border"
          >
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-foreground mb-3">
                How They Connect
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                One action in the lawyer dashboard automatically updates the
                client app — creating a seamless, transparent legal workflow.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  step: "01",
                  title: "Lawyer updates case",
                  desc: "Advocate logs a hearing result or uploads a document in the dashboard.",
                },
                {
                  step: "02",
                  title: "Platform syncs instantly",
                  desc: "MyLegalAbode automatically notifies the client and updates their case timeline.",
                },
                {
                  step: "03",
                  title: "Client sees in real time",
                  desc: "Client receives a push notification and views the update in their mobile app.",
                },
              ].map((s) => (
                <div key={s.step} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto">
                    <span className="font-serif font-bold text-accent-foreground text-sm">{s.step}</span>
                  </div>
                  <h3 className="font-serif font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              What Changes When You Switch
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "⚡", title: "60% less admin time", desc: "Automated reminders and workflows eliminate manual coordination." },
              { icon: "🤝", title: "Stronger client trust", desc: "Clients feel informed and confident, leading to better retention." },
              { icon: "💰", title: "Faster billing", desc: "Digital invoices and online payments speed up cash collection." },
              { icon: "📊", title: "Practice visibility", desc: "Know exactly what is happening across every case and team member." },
              { icon: "🔒", title: "Secure by design", desc: "End-to-end encryption for all client communications and documents." },
              { icon: "🌐", title: "Work from anywhere", desc: "Browser-based dashboard means you're never tied to one machine." },
            ].map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Card className="bg-white/6 border-white/10 hover:bg-white/10 transition-colors h-full">
                  <CardContent className="pt-6 pb-6">
                    <p className="text-2xl mb-3">{b.icon}</p>
                    <p className="font-serif font-semibold text-primary-foreground mb-1.5">{b.title}</p>
                    <p className="text-sm text-primary-foreground/60">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-6 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-10 h-10 text-accent mx-auto mb-5" />
            <h2 className="font-serif text-4xl font-bold text-foreground mb-4">
              Ready to Transform Your Practice?
            </h2>
            <p className="text-muted-foreground text-lg mb-7">
              Join early access and be among the first law firms to experience
              MyLegalAbode when it launches June 30.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/demo">
                  Schedule a Demo <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="border border-border">
                <Link to="/features">Explore All Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
