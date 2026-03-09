
import { useState } from "react";
import { motion } from "motion/react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { toast } from "sonner";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    // Simulate form submission — backend will be connected in next milestone
    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      toast.success("Message sent! We'll get back to you shortly.");
    }, 1000);
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
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="font-serif text-5xl lg:text-6xl font-bold text-foreground text-balance leading-tight mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto"
          >
            Have a question about MyLegalAbode? We&apos;d love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 space-y-6"
            >
              <h2 className="font-serif text-2xl font-bold text-foreground">
                Reach Out Directly
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you have questions about the platform, early access
                program, or partnership opportunities — we&apos;re here to help.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-foreground">Email</p>
                    <a
                      href="mailto:hello@mylegalabode.com"
                      className="text-accent hover:text-accent/80 text-sm transition-colors"
                    >
                      hello@mylegalabode.com
                    </a>
                  </div>
                </div>
              </div>

              <Card className="bg-primary text-primary-foreground border-primary mt-6">
                <CardContent className="pt-6 pb-6">
                  <p className="font-serif font-bold mb-2">Looking for a demo?</p>
                  <p className="text-primary-foreground/60 text-sm mb-4">
                    Schedule a personalised walkthrough of the platform.
                  </p>
                  <Button
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90 w-full font-semibold"
                  >
                    <a href="/demo">
                      Schedule Demo <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-3"
            >
              <Card className="border-2 border-border shadow-lg">
                <CardContent className="pt-8 pb-8 px-8">
                  {submitted ? (
                    <div className="text-center py-12 space-y-5">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold text-foreground">
                        Message Sent!
                      </h3>
                      <p className="text-muted-foreground max-w-sm mx-auto">
                        Thank you for reaching out. Our team will review your
                        message and get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => setSubmitted(false)}
                        variant="secondary"
                        className="mt-4 border border-border"
                      >
                        Send another message
                      </Button>
                    </div>
                  ) : (
                    <>
                      <h2 className="font-serif text-xl font-bold text-foreground mb-1">
                        Send a Message
                      </h2>
                      <p className="text-muted-foreground text-sm mb-7">
                        We typically respond within 24 hours.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                          <Label htmlFor="contact-name">Full Name</Label>
                          <Input id="contact-name" placeholder="John Smith" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contact-email">Email Address</Label>
                          <Input id="contact-email" type="email" placeholder="john@example.com" required />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="contact-message">Message</Label>
                          <Textarea
                            id="contact-message"
                            placeholder="Tell us how we can help..."
                            rows={5}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={sending}
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-11 font-semibold shadow-lg shadow-accent/20"
                        >
                          {sending ? "Sending..." : "Send Message"}
                          {!sending && <ArrowRight className="ml-2 w-4 h-4" />}
                        </Button>
                      </form>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
