import { useState } from "react";
import { motion } from "framer-motion";
import { HiEnvelope, HiOutlineDocumentArrowDown } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import SectionHeading from "../../components/ui/SectionHeading";
import SocialButton from "../../components/ui/SocialButton";
import Button from "../../components/ui/Button";

import { fadeUp } from "../../utils/animations";

// TODO: replace with your real detailss
const CONTACT_LINKS = [
  {
    icon: HiEnvelope,
    label: "Email",
    value: "harshavardhanuddangi@gmail.com",
    href: "mailto:harshavardhanuddangi@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "/in/harsha-vardhan-029447355/",
    href: "https://www.linkedin.com/in/harsha-vardhan-029447355/",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@harshavardhan0401",
    href: "https://github.com/harshavardhan0401",
  },
  {
  icon: SiLeetcode,
  label: "LeetCode",
  value: "leetcode.com/u/harsha_vardhan0401/",
  href: "https://leetcode.com/u/harsha_vardhan0401/",
  },
  {
    icon: HiOutlineDocumentArrowDown,
    label: "Resume",
    value: "Download PDF",
    href: "/resume.pdf",
  },
  
];

function encodeForm(data) {
  return Object.keys(data)
    .map(
      (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
    )
    .join("&");
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Netlify Forms AJAX submission — requires the hidden static form
      // in index.html so Netlify detects it at build/deploy time.
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "contact", ...formData }),
      });

      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setStatus("error");
    }
  }

  return (
    <Section id="contact">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's build something together."
            description="Have a role, a project, or just want to say hi? I'm open to internships and collaborations — reach out however's easiest for you."
          />
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          {/* Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.15}
            className="space-y-4"
          >
            {CONTACT_LINKS.map((link) => (
              <SocialButton key={link.label} {...link} />
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.3}
            onSubmit={handleSubmit}
            name="contact"
            className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl"
          >
            {/* Required for Netlify to associate this submission with the
                hidden static form declared in index.html */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm text-zinc-400">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-emerald-500/50 focus:bg-white/10"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm text-zinc-400">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-emerald-500/50 focus:bg-white/10"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-zinc-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition focus:border-emerald-500/50 focus:bg-white/10"
                placeholder="What's on your mind?"
              />
            </div>

            <Button className="w-full justify-center" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send Message"}
            </Button>

            {status === "sent" && (
              <p className="text-center text-sm text-emerald-400">
                Thanks — I'll get back to you soon.
              </p>
            )}

            {status === "error" && (
              <p className="text-center text-sm text-red-400">
                Something went wrong. Try emailing me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </Container>
    </Section>
  );
}
