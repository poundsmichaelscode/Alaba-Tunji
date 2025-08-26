import  { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Mail, FileDown, Sun, Moon, Phone, MapPin, Briefcase, School, CheckCircle } from "lucide-react";

// ======== CONFIG ========
const RESUME_URL = "/AlabaTunji_Taiwo_CV.pdf"; // update if hosted elsewhere
const EMAIL_TO = "alatundor1@gmail.com";
const PHONE_NO = "09051273307";
const ADDRESS = "9, Okanlawon Street, Otubu, Agege, Lagos";
const PROFILE_IMG = "/WhatsApp Image 2025-01-16 at 08.56.44.jpeg";

export default function AccountantPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;
    const stored = localStorage.getItem("prefers-dark");
    if (stored !== null) return stored === "true";
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("prefers-dark", String(dark));
  }, [dark]);

  useEffect(() => {
    const onHashChange = () => setMenuOpen(false);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const navLinks = useMemo(
    () => [
      { href: "#home", label: "Home" },
      { href: "#about", label: "About" },
      { href: "#experience", label: "Experience" },
      { href: "#skills", label: "Skills" },
      { href: "#education", label: "Education" },
      { href: "#contact", label: "Contact" },
    ],
    []
  );

  const summary = `Detail-oriented Accountant with hands-on experience across treasury operations, general ledger management,
  financial reporting, and instruction. Adept at bank reconciliations, payables/receivables, budgeting, and audit
  readiness. Strong analytical mindset and a calm, professional presence; proficient with SAGE, QuickBooks, Excel and
  familiar with SAP.`;

  const achievements = [
    "General Ledger Accounting",
    "Financial Analysis & Reporting",
    "Accounting Software: SAGE, QuickBooks, Excel, SAP (familiar)",
  ];

  type Experience = {
    role: string;
    org: string;
    period: string;
    bullets: string[];
  };

  const experience: Experience[] = [
    {
      role: "Treasury Officer",
      org: "Workforce Management Centre",
      period: "2023 – Present",
      bullets: [
        "Managed daily cash positions, bank lodgments and inter-account transfers.",
        "Prepared and reconciled bank statements; investigated variances to GL.",
        "Supported month-end close, liquidity reporting and cashflow forecasts.",
      ],
    },
    {
      role: "Assistant Account Officer",
      org: "Rostrum Investment and Securities LTD",
      period: "2022 – 2023",
      bullets: [
        "Processed AP/AR transactions and posted journals to the general ledger.",
        "Assisted with budgeting, variance analysis and management reports.",
        "Helped prepare schedules for external audit and tax filings.",
      ],
    },
    {
      role: "Financial Accounting Instructor",
      org: "Ajayi Crowther Senior Grammar School",
      period: "2023",
      bullets: [
        "Delivered lessons on bookkeeping, ledgers and financial statements.",
        "Developed assessments and improved students’ exam readiness.",
      ],
    },
    {
      role: "Financial Accounting Instructor",
      org: "Arch Deacon Senior High School",
      period: "2022",
      bullets: [
        "Taught principles of accounting, double-entry and trial balance.",
        "Mentored students and introduced spreadsheet-based practice.",
      ],
    },
    {
      role: "Secretary",
      org: "Fountain of Lord's Glory",
      period: "2017 – 2019",
      bullets: [
        "Handled correspondence, records and basic bookkeeping tasks.",
        "Maintained schedules and supported event logistics.",
      ],
    },
    {
      role: "Receptionist",
      org: "Bamit Professional Printers",
      period: "2016 – 2017",
      bullets: [
        "Customer reception, document handling and cash receipt logging.",
        "Coordinated front-desk inquiries and filing systems.",
      ],
    },
  ];

  const skills = [
    "Accounting Knowledge",
    "Financial Reporting",
    "General Ledger",
    "Accounts Payable/Receivable",
    "Bank Reconciliation",
    "Budgeting & Forecasting",
    "Microsoft Office",
    "Excel (Advanced)",
    "Data Entry",
    "Problem Solving",
    "SAGE",
    "QuickBooks",
    "SAP (Familiar)",
    "Audit Support",
    "Reconsilation"
  ];

  const education = [
    {
      title: "University of Benin — B.Ed Accounting",
      period: "2019 – 2023",
    },
    {
      title: "Odogunyan Grammar School — High School Diploma",
      period: "2010 – 2016",
    },
  ];

  const certifications = [
    "AAT (ICAN, 2021)",
    "ACA (ICAN in view)",
    "Professional Ethics (CFI, 2022)",
    "Certified Customer Service (LSEFT, 2022)",
    "SAGE Accounting Software (2023)",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 scroll-smooth">


      {/* ======== NAVBAR ======== */}

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 focus:outline-none focus-visible:ring rounded-xl">
            <div className="#" />
            <span className="font-bold tracking-tight text-lg">Alaba‑Tunji Taiwo</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring rounded-xl">
                {l.label}
              </a>
            ))}
            <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme" className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:shadow-sm transition">
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setDark((d) => !d)} aria-label="Toggle theme" className="p-2 rounded-xl border border-slate-200 dark:border-slate-800">
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setMenuOpen((m) => !m)} aria-label="Toggle menu" className="p-2 rounded-xl border border-slate-200 dark:border-slate-800">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95">
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col">
              {navLinks.map((l) => (
                <a key={l.href} href={l.href} className="py-2 text-sm font-medium hover:opacity-80">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* ======== HERO ======== */}
      <section id="home" className="relative overflow-hidden">
        <div className="absolute -z-10 inset-0 opacity-20 dark:opacity-30 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-emerald-400 blur-3xl" />
          <div className="absolute top-40 -left-24 w-72 h-72 rounded-full bg-teal-400 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
            <p className="uppercase tracking-widest text-xs text-slate-500 dark:text-slate-400 mb-3">Accountant</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">Alaba‑Tunji Taiwo</h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-prose">{summary}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white hover:translate-y-0.5 active:translate-y-0 transition-transform shadow-lg">
                <Mail className="w-5 h-5" /> Contact Me
              </a>
              <a href={RESUME_URL} download className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition">
                <FileDown className="w-5 h-5" /> Download Resume
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
              <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> {ADDRESS}</span>
              <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4" /> {PHONE_NO}</span>
              <span className="inline-flex items-center gap-2"><Mail className="w-4 h-4" /> {EMAIL_TO}</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden ring-8 ring-emerald-500/20 shadow-2xl">
              <img src={PROFILE_IMG} alt="Headshot of Alaba‑Tunji Taiwo" className="object-cover w-full h-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ======== ABOUT ======== */}
      <section id="about" className="py-16 sm:py-24 border-t border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold tracking-tight">About</motion.h2>
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5, delay: 0.05 }} className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
            {summary}
          </motion.p>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((a) => (
              <motion.div key={a} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.4 }} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="font-medium">{a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== EXPERIENCE ======== */}
      <section id="experience" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold tracking-tight">Work Experience</motion.h2>

        <div className="mt-10 relative">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-1 bg-slate-200 dark:bg-slate-800 rounded-full" />
          <ol className="space-y-6">
            {experience.map((exp, idx) => (
              <li key={exp.role+idx} className={`relative grid sm:grid-cols-2 gap-6 items-start ${idx % 2 === 0 ? "sm:text-right" : ""}`}>
                {/* marker */}
                <span className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 mt-2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />

                <div className={`${idx % 2 === 0 ? "sm:pr-10" : "sm:order-2 sm:pl-10"}`}>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <Briefcase className="w-4 h-4" /> {exp.period}
                  </div>
                  <h3 className="mt-1 font-semibold text-lg">{exp.role}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{exp.org}</p>
                </div>

                <motion.ul
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.4 }}
                  className={`${idx % 2 === 0 ? "sm:order-2 sm:pl-10" : "sm:pr-10"} group space-y-2 text-sm`}
                >
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:translate-x-1 transition-transform">
                      {b}
                    </li>
                  ))}
                </motion.ul>
              </li>
            ))}
          </ol>
        </div>
        </div>
      </section>

      {/* ======== SKILLS ======== */}
      <section id="skills" className="py-16 sm:py-24 border-y border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold tracking-tight">Skills</motion.h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {skills.map((skill) => (
              <motion.div key={skill} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.35 }} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 hover:shadow-lg transition">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <p className="font-medium">{skill}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ======== EDUCATION & CERTIFICATIONS ======== */}
      <section id="education" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold tracking-tight">Education & Certifications</motion.h2>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
              <h3 className="font-semibold text-lg flex items-center gap-2"><School className="w-5 h-5" /> Education</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {education.map((e, i) => (
                  <li key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">
                    <p className="font-medium">{e.title}</p>
                    <p className="text-slate-600 dark:text-slate-300">{e.period}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
              <h3 className="font-semibold text-lg flex items-center gap-2"><CheckCircle className="w-5 h-5" /> Certifications</h3>
              <ul className="mt-4 grid gap-3 text-sm">
                {certifications.map((c, i) => (
                  <li key={i} className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60">{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ======== CONTACT ======== */}
      <section id="contact" className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.5 }} className="text-2xl sm:text-3xl font-bold tracking-tight">Contact</motion.h2>

          <div className="mt-8 grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
              <h3 className="font-semibold text-lg">Let’s work together</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Send a message and I’ll get back to you within 1–2 business days.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> {EMAIL_TO}</li>
                <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> {PHONE_NO}</li>
                <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> {ADDRESS}</li>
              </ul>
            </div>

            {/* mailto form with subject */}
            <form
              className="p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950"
              action={`mailto:${EMAIL_TO}`}
              method="GET"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const formData = new FormData(form);
                const name = String(formData.get("name") || "").trim();
                const email = String(formData.get("email") || "").trim();
                const subjectField = String(formData.get("subject") || "").trim();
                const message = String(formData.get("message") || "").trim();
                const subject = encodeURIComponent(subjectField || `Portfolio Inquiry – ${name || "No name"}`);
                const body = encodeURIComponent(`Name: ${name}
Email: ${email}

${message}`);
                window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <input id="name" name="name" type="text" required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                  <input id="subject" name="subject" type="text" required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="How can I help you?" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea id="message" name="message" rows={5} required className="mt-1 w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Tell me about your project or inquiry" />
                </div>
                <button type="submit" className="inline-flex justify-center items-center gap-2 px-5 py-3 rounded-2xl bg-emerald-600 text-white hover:translate-y-0.5 active:translate-y-0 transition-transform shadow-lg">
                  <Mail className="w-5 h-5" /> Send via Email
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>


      {/* ======== FOOTER ======== */}
      <footer className="py-8 border-t border-slate-200/60 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Alaba‑Tunji Taiwo. All rights reserved. by Pounds michaels Digitals</p>
          <div className="flex items-center gap-4">
            <a href={RESUME_URL} download className="underline underline-offset-4">Resume</a>
            <a href="#home" className="underline underline-offset-4">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

