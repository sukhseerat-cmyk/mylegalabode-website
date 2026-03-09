import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Scale, Zap, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-28 bg-gradient-to-br from-white to-secondary/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial="hidden" animate="visible" custom={0} variants={fadeUp}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            About
          </motion.p>
          <motion.h1
            initial="hidden" animate="visible" custom={1} variants={fadeUp}
            className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-7"
          >
            Modernizing How Legal Practice Operates
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" custom={2} variants={fadeUp}
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            MyLegalAbode creates a connected ecosystem for lawyers and clients —
            replacing fragmented tools with one intelligent, unified platform.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-background">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="space-y-5"
            >
              <h2 className="font-serif text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We believe every advocate in India deserves access to world-class
                legal technology — without the complexity or cost that comes with
                enterprise software built for Western markets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                MyLegalAbode was built from the ground up for Indian legal
                practice — understanding the court system, the languages, the
                workflows, and the unique challenges Indian advocates face every
                day.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="grid grid-cols-1 gap-4"
            >
              {[
                { icon: Scale, title: "Built for India", desc: "Designed around Indian court systems, bar councils, and legal workflows." },
                { icon: Zap, title: "AI-Powered", desc: "Intelligent automation that handles administrative tasks, so you can focus on law." },
                { icon: Heart, title: "Client-First", desc: "Transparency between lawyers and clients builds trust and loyalty." },
              ].map((v) => (
                <Card key={v.title} className="border-border">
                  <CardContent className="pt-5 pb-5 flex items-start gap-4">
                    <div className="w-9 h-9 bg-primary/8 rounded-lg flex items-center justify-center flex-shrink-0">
                      <v.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">{v.title}</p>
                      <p className="text-sm text-muted-foreground">{v.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* The ecosystem */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              A Complete Digital Legal Ecosystem
            </h2>
            <p className="text-primary-foreground/65 text-lg max-w-xl mx-auto">
              MyLegalAbode centralizes every layer of legal operations into one
              connected system.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { emoji: "⚖️", title: "Case Management", desc: "Track every case from filing to judgment." },
              { emoji: "💬", title: "Client Communication", desc: "Centralized inbox replacing WhatsApp." },
              { emoji: "📁", title: "Document Workflows", desc: "Auto-classification and semantic search." },
              { emoji: "📅", title: "Hearing Reminders", desc: "Never miss a court date again." },
              { emoji: "💳", title: "Invoicing & Payments", desc: "Track revenue and collect fees online." },
              { emoji: "🤖", title: "AI Assistance", desc: "Intelligent legal workflow automation." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Card className="bg-white/6 border-white/10 hover:bg-white/10 transition-colors h-full">
                  <CardContent className="pt-6 pb-6">
                    <p className="text-2xl mb-3">{item.emoji}</p>
                    <p className="font-serif font-semibold text-primary-foreground mb-1.5">{item.title}</p>
                    <p className="text-sm text-primary-foreground/60">{item.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-background">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-7"
          >
            <Target className="w-10 h-10 text-accent mx-auto" />
            <h2 className="font-serif text-4xl font-bold text-foreground">
              The Vision
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We envision a future where every Indian advocate — from a solo
              practitioner in Lucknow to a 50-person firm in Mumbai — operates
              with the same tools, efficiency, and client trust that the world's
              top law firms enjoy.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              MyLegalAbode is not just software. It&apos;s the foundation of the
              modern Indian legal practice.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/demo">
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="secondary" className="border border-border">
                <Link to="/features">Explore Features</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
