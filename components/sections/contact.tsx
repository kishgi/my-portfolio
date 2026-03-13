"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
const access_key = process.env.W3_ACCESS_KEY;

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/yourusername",
  },
  {
    name: "Email",
    icon: Mail,
    href: "mailto:your.email@example.com",
  },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending...");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const json = await response.json();

      if (json.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset local state
        form.reset(); // Reset native form inputs
      } else {
        setResult(json.message || "Failed to send message.");
        console.error("Web3Forms error:", json);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div>
            <h3 className="text-xl font-semibold mb-4 justify-end border-b border-white border-border pb-2">
              Ping Me
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Hidden input for Web3Forms access key */}
              <input type="hidden" name="access_key" value={access_key} />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border bg-background"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>

              {/* Submission result message */}
              {result && (
                <p className="mt-4 text-center text-sm text-gray-600">
                  {result}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
