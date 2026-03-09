import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Calendar, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { toast } from "sonner";

const practiceAreas = [
  "Criminal Law",
  "Civil Litigation",
  "Family Law",
  "Corporate & Commercial",
  "Property & Real Estate",
  "Tax Law",
  "Intellectual Property",
  "Labour & Employment",
  "Constitutional Law",
  "Other",
];

const firmSizes = [
  "Solo Practitioner",
  "2-5 Advocates",
  "6-15 Advocates",
  "16-50 Advocates",
  "50+ Advocates",
];

const benefits = [
  { icon: Calendar, title: "Personalised Demo", desc: "A tailored walkthrough of the platform for your firm's specific practice." },
  { icon: Users, title: "Priority Onboarding", desc: "Early access firms get white-glove onboarding and dedicated support." },
  { icon: Shield, title: "Founding Firm Pricing", desc: "Lock in special launch pricing reserved for early access members." },
  { icon: Zap, title: "Shape the Product", desc: "Direct access to the product team — your feedback builds the roadmap." },
];

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    // Simulate form submission — backend will be connected in next milestone
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      toast.success("Your demo request has been submitted! We'll be in touch soon.");
    }, 1200);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-white to-secondary/40">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-accent text-sm font-semibold uppercase tracking-widest mb-4"
          >
            Early Access
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-6"
          >
            Get Early Access to MyLegalAbode
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            MyLegalAbode is currently in development and launching June 30. Law
            firms can request early demos and join the early access program.
          </motion.p>
        </div>
      </section>

      {/* Form + benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="border-2 border-border shadow-lg">
                <CardContent className="pt-8 pb-8 px-8">
                  {submitted ? (
                    <div className="text-center py-12 space-y-5">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        Your demo request has been received. Our team will reach out
                        within 48 hours to schedule your personalised walkthrough.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="secondary"
                        className="mt-4 border border-border"
                      >
                        Submit another request
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                        Request Early Demo
                      </h2>
                      <p className="text-muted-foreground text-sm mb-7">
                        Fill in your details and we&apos;ll schedule a
                        personalised demo for your firm.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" placeholder="Adv. Ravi Sharma" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="firm">Law Firm Name</Label>
                            <Input id="firm" placeholder="Sharma & Associates" required />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" placeholder="ravi@sharmafirm.com" required />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" type="tel" placeholder="+91 98765 43210" required />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <Label>Practice Area</Label>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select practice area" />
                              </SelectTrigger>
                              <SelectContent>
                                {practiceAreas.map((area) => (
                                  <SelectItem key={area} value={area}>{area}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label>Firm Size</Label>
                            <Select required>
                              <SelectTrigger>
                                <SelectValue placeholder="Select firm size" />
                              </SelectTrigger>
                              <SelectContent>
                                {firmSizes.map((size) => (
                                  <SelectItem key={size} value={size}>{size}</SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          disabled={sending}
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-base font-semibold shadow-lg shadow-accent/20"
                        >
                          {sending ? "Submitting..." : "Request Early Demo"}
                          {!sending && <ArrowRight className="ml-2 w-4 h-4" />}
                        </Button>

                        <p className="text-center text-xs text-muted-foreground">
                          By submitting, you agree to receive communications from
                          MyLegalAbode about the early access program.
                        </p>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Benefits sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-5"
            >
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Why Join Early Access?
              </h3>
              {benefits.map((b) => (
                <Card key={b.title} className="border-border">
                  <CardContent className="pt-5 pb-5 flex items-start gap-4">
                    <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <b.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground text-sm mb-1">{b.title}</p>
                      <p className="text-sm text-muted-foreground">{b.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-primary text-primary-foreground border-primary">
                <CardContent className="pt-6 pb-6 text-center">
                  <p className="font-serif font-bold text-lg mb-2">Launch Date</p>
                  <p className="text-4xl font-serif font-bold text-accent mb-1">June 30</p>
                  <p className="text-primary-foreground/60 text-sm">2026</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
