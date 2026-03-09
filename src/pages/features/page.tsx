
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import {
  ArrowRight, Calendar, MessageSquare, FileText, BarChart3, Smartphone,
  CheckCircle2, Bell, Search, CreditCard, Users, Globe, Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";

type Feature = {
  icon: React.ElementType;
  label: string;
};

type Pillar = {
  number: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  features: Feature[];
  replaces: string[];
  accentColor: string;
};

const pillars: Pillar[] = [
  {
    number: "01",
    icon: Calendar,
    title: "Case & Hearing Management",
    tagline: "Replaces: Excel spreadsheets and manual diaries",
    description:
      "Track every case from the moment it's filed to the final judgment. Never miss a hearing, never lose track of a deadline.",
    features: [
      { icon: Calendar, label: "Case lifecycle tracking (Filing → Hearing → Judgment)" },
      { icon: Bell, label: "Hearing calendar with automated reminders" },
      { icon: CheckCircle2, label: "Visual Trello-style case board" },
      { icon: Bell, label: "Conflict detection for overlapping hearings" },
      { icon: Search, label: "Instant case search and filters" },
    ],
    replaces: ["Excel spreadsheets", "Physical case diaries", "Manual calendars", "Sticky notes & reminders"],
    accentColor: "text-primary bg-primary/8 border-primary/15",
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Communication & Client Management",
    tagline: "Replaces: WhatsApp and scattered email threads",
    description:
      "One inbox for all case-related communications. Every message is linked to a case, every conversation has a history.",
    features: [
      { icon: MessageSquare, label: "Centralised inbox replacing WhatsApp" },
      { icon: CheckCircle2, label: "Case-linked conversations with full message history" },
      { icon: CheckCircle2, label: "Message templates for common responses" },
      { icon: Bell, label: "Automated client notifications for case updates" },
      { icon: Users, label: "Internal team chat for lawyers and staff" },
    ],
    replaces: ["WhatsApp groups", "Scattered email threads", "Phone call follow-ups", "Manual status updates"],
    accentColor: "text-blue-700 bg-blue-50 border-blue-200",
  },
  {
    number: "03",
    icon: FileText,
    title: "Document Intelligence",
    tagline: "Replaces: Google Drive folders and manual scanning",
    description:
      "A smart document hub that automatically organizes, tags, and indexes every file — making search instant and secure sharing effortless.",
    features: [
      { icon: FileText, label: "Document hub with auto-classification and tagging" },
      { icon: Search, label: "Semantic search across all case documents" },
      { icon: CheckCircle2, label: "Built-in OCR scanner to capture physical documents" },
      { icon: CheckCircle2, label: "Version control and document history" },
      { icon: Lock, label: "Secure client document sharing" },
    ],
    replaces: ["Google Drive folders", "Manual scanning", "Email attachments", "Physical file rooms"],
    accentColor: "text-emerald-700 bg-emerald-50 border-emerald-200",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Practice Intelligence & Operations",
    tagline: "Replaces: Manual practice management tools",
    description:
      "Full visibility into your practice's performance — from case analytics and productivity insights to revenue tracking and staff management.",
    features: [
      { icon: BarChart3, label: "Case analytics and productivity insights" },
      { icon: Calendar, label: "Upcoming hearings and deadline overview" },
      { icon: CreditCard, label: "Payment tracking and revenue dashboard" },
      { icon: Users, label: "Staff task assignment and workflow tracking" },
      { icon: CheckCircle2, label: "Firm-wide operational visibility" },
    ],
    replaces: ["Manual billing logs", "Separate accounting tools", "Ad-hoc task assignment", "Guesswork about firm performance"],
    accentColor: "text-purple-700 bg-purple-50 border-purple-200",
  },
  {
    number: "05",
    icon: Smartphone,
    title: "Client Mobile App",
    tagline: "Invitation-only — lawyers invite clients directly from the dashboard",
    description:
      "Transform the client experience from uncertainty to transparency. A dedicated app that keeps clients informed, engaged, and confident at every step.",
    features: [
      { icon: CheckCircle2, label: "Real-time case progress tracking" },
      { icon: Calendar, label: "View upcoming hearings and deadlines" },
      { icon: FileText, label: "Upload documents directly to their case file" },
      { icon: MessageSquare, label: "Secure messaging with lawyers and case managers" },
      { icon: CreditCard, label: "Online invoice payments and receipts" },
      { icon: CheckCircle2, label: "AI assistant explaining case progress and next steps" },
      { icon: Globe, label: "Multilingual support (English, Hindi, Punjabi)" },
    ],
    replaces: ["WhatsApp updates", "Phone calls for case status", "Physical receipt collection"],
    accentColor: "text-accent bg-accent/8 border-accent/20",
  },
];

export default function FeaturesPage() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-28 bg-gradient-to-br from-white to-secondary/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Features
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-7"
          >
            Five Pillars of Modern Legal Practice
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            One platform replacing six disconnected tools — each pillar
            engineered specifically for Indian legal practice.
          </motion.p>
        </div>
      </section>

      {/* Feature pillars */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
            >
              <Card className="border-2 border-border overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-5 px-8 pt-8 pb-6 border-b border-border">
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-5xl font-bold text-border select-none">
                      {pillar.number}
                    </span>
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border ${pillar.accentColor}`}>
                      <pillar.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-foreground">{pillar.title}</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">{pillar.tagline}</p>
                  </div>
                </div>

                <CardContent className="px-8 py-7">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Description */}
                    <div className="lg:col-span-1 space-y-5">
                      <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                      <div className="bg-secondary/60 rounded-xl p-4 border border-border">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2.5">
                          Replaces
                        </p>
                        <ul className="space-y-1.5">
                          {pillar.replaces.map((r) => (
                            <li key={r} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-destructive/60 flex-shrink-0" />
                              {r}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="lg:col-span-2">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                        Included capabilities
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2.5">
                        {pillar.features.map((f) => (
                          <li key={f.label} className="flex items-start gap-2.5 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {f.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI section callout */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto">
              <span className="text-2xl">🤖</span>
            </div>
            <h2 className="font-serif text-4xl font-bold">
              Powered by AI Throughout
            </h2>
            <p className="text-primary-foreground/65 text-lg max-w-xl mx-auto">
              Every pillar is enhanced by AI — from intelligent document
              classification to automated client notifications to an AI assistant
              that explains case progress in plain language.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
                <Link to="/demo">
                  See it in action <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
