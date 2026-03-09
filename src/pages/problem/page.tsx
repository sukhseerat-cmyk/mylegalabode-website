import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle, Clock, Users, MessageSquare, FileSpreadsheet, Mail } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

export default function ProblemPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-28 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            The Problem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-balance leading-tight mb-7"
          >
            Legal Practice Still Runs on Fragmented Tools
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-primary-foreground/70 leading-relaxed max-w-2xl mx-auto"
          >
            Indian advocates spend nearly half their working day on administrative
            tasks that add no legal value — because the tools they use were never
            designed to work together.
          </motion.p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-14 bg-accent/5 border-y border-accent/15">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { stat: "40%", label: "of advocate time lost to admin" },
              { stat: "6+", label: "disconnected tools used daily" },
              { stat: "0", label: "real-time client visibility" },
              { stat: "₹Crores", label: "in delayed billing every year" },
            ].map((s) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="font-serif text-4xl font-bold text-accent mb-1">{s.stat}</p>
                <p className="text-sm text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three problems */}
      <section className="py-24 bg-background">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {/* Problem 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-destructive/10 rounded-xl flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-destructive" />
                </div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wide">Problem 1</p>
              </div>
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Operational Fragmentation
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The average Indian advocate uses six or more disconnected tools
                to manage their practice — WhatsApp for client updates, email for
                formal communication, Excel for case tracking, Google Drive for
                documents, and a physical diary for hearings.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                None of these tools talk to each other. Every update has to be
                manually replicated across platforms. Critical information falls
                through the cracks.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="grid grid-cols-2 gap-3"
            >
              {[
                { icon: MessageSquare, label: "WhatsApp", sub: "Client messages" },
                { icon: Mail, label: "Email", sub: "Formal updates" },
                { icon: FileSpreadsheet, label: "Excel", sub: "Case tracking" },
                { icon: FileSpreadsheet, label: "Google Drive", sub: "Documents" },
              ].map((tool) => (
                <Card key={tool.label} className="border-destructive/20 bg-destructive/3">
                  <CardContent className="pt-5 pb-5 text-center">
                    <tool.icon className="w-6 h-6 text-destructive/60 mx-auto mb-2" />
                    <p className="font-semibold text-sm text-foreground">{tool.label}</p>
                    <p className="text-xs text-muted-foreground">{tool.sub}</p>
                  </CardContent>
                </Card>
              ))}
              <div className="col-span-2 bg-destructive/8 rounded-xl p-4 border border-destructive/15 text-center">
                <p className="text-sm font-semibold text-destructive">No integration. No single source of truth.</p>
                <p className="text-xs text-muted-foreground mt-1">Data is scattered, duplicate, and unreliable.</p>
              </div>
            </motion.div>
          </div>

          {/* Problem 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1"
            >
              <Card className="border-border shadow-sm">
                <CardContent className="pt-7 pb-7">
                  <div className="space-y-3">
                    <p className="text-sm font-semibold text-muted-foreground mb-4">
                      A typical client experience today:
                    </p>
                    {[
                      { from: "Client", msg: "What's happening with my case?", align: "left" },
                      { from: "Lawyer", msg: "Let me check and get back to you.", align: "right" },
                      { from: "Client", msg: "It's been 2 weeks, any update?", align: "left" },
                      { from: "Lawyer", msg: "Sorry, we had a hearing — next date is TBD.", align: "right" },
                      { from: "Client", msg: "I feel completely left in the dark.", align: "left" },
                    ].map((m, i) => (
                      <div key={i} className={`flex ${m.align === "right" ? "justify-end" : "justify-start"}`}>
                        <div className={`max-w-[80%] px-3.5 py-2 rounded-xl text-sm ${
                          m.align === "right"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-secondary text-foreground rounded-bl-sm"
                        }`}>
                          <p className="text-[10px] font-semibold opacity-60 mb-0.5">{m.from}</p>
                          {m.msg}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5 order-1 md:order-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wide">Problem 2</p>
              </div>
              <h2 className="font-serif text-4xl font-bold text-foreground">
                The Client Transparency Gap
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Clients pay significant fees with almost no visibility into what
                is happening with their case. They have no portal, no timeline,
                no real-time updates — just occasional WhatsApp messages.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                This lack of transparency damages trust, generates constant
                follow-up calls, and ultimately hurts law firms' reputations and
                client retention.
              </p>
            </motion.div>
          </div>

          {/* Problem 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <p className="text-accent font-semibold text-sm uppercase tracking-wide">Problem 3</p>
              </div>
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Administrative Time Drain
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Studies of legal practice in India show advocates spend up to 40%
                of their working hours on tasks that are purely administrative —
                scheduling hearings, chasing document signatures, updating case
                files, following up with clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                That is time that could be spent on legal research, client
                strategy, and growing the firm.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="border-orange-200 bg-orange-50/50">
                <CardContent className="pt-7 pb-7 space-y-4">
                  <p className="font-semibold text-foreground mb-5">How an advocate spends their week:</p>
                  {[
                    { task: "Legal research & strategy", pct: 30, color: "bg-primary" },
                    { task: "Court appearances", pct: 20, color: "bg-accent" },
                    { task: "Client meetings", pct: 15, color: "bg-green-500" },
                    { task: "Admin & coordination", pct: 35, color: "bg-destructive" },
                  ].map((item) => (
                    <div key={item.task}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-muted-foreground">{item.task}</span>
                        <span className="font-semibold text-foreground">{item.pct}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                  <p className="text-xs text-destructive font-semibold pt-1">
                    MyLegalAbode targets to reduce admin time to under 10%
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-7">
          <h2 className="font-serif text-4xl font-bold">
            We Built the Solution
          </h2>
          <p className="text-primary-foreground/65 text-lg">
            MyLegalAbode solves each of these problems with one unified platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
              <Link to="/solution">
                See the Solution <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" className="text-primary-foreground/70 hover:text-primary-foreground hover:bg-white/10">
              <Link to="/demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
