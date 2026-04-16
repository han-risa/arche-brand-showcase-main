import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const InquiryForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry sent",
      description: "We'll get back to you soon!",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="px-6 md:px-16 py-24">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs tracking-[0.3em] uppercase text-primary mb-4"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            Get in Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-2">
            Inquiry
          </h2>
          <p className="text-sm text-muted-foreground mb-12">
            Interested in collaborating or featuring your brand on Arche?
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full bg-transparent border-b border-border pb-2 text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label
                className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent border-b border-border pb-2 text-foreground focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <div>
              <label
                className="block text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="w-full bg-transparent border-b border-border pb-2 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="text-xs tracking-[0.3em] uppercase text-primary border-b border-primary pb-1 hover:text-foreground hover:border-foreground transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              Send Inquiry
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default InquiryForm;
