import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { Linkedin, Instagram, Facebook, ArrowRight,ArrowUp, Bookmark,Menu,
  X, } from "lucide-react";

import Preloader from "../components/Preloader";
import ScrollReveal from "../components/ScrollReveal";
import { sendContactMessage } from "../lib/contact.functions";


const RUTH_IMG =
  "https://cdn.beacons.ai/user_content/JxroMmCoXLaA9O3WtmUClyUgrd82/referenced_images/d752c8fb-7e24-49cf-b30d-fb673c054bfd__website__92d33d80-fb58-4be1-bfc7-957b452329df__content__homepage__a3f7e9c4-4c46-4850-9c3a-0aac4fdcbbe2__819dfc35-6bc6-4170-9dfd-85b1136cf80a.webp?t=1761046154229";
const BOOK = "https://ruecoaching.com/shop/free_discovery_call";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RueCoaching — Helping young people discover, dream and do" },
      { name: "description", content: "Career exploration, mentorship and capacity building for young people, founded by Dr. Ruth Mwongeli." },
      { property: "og:title", content: "RueCoaching — Helping young people discover, dream and do" },
      { property: "og:description", content: "Career exploration, mentorship and coaching so young people don't figure out their future alone." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: RUTH_IMG },
      { name: "twitter:image", content: RUTH_IMG },
    ],
  }),
  component: Index,
});

const socials = [
  { href: "https://www.linkedin.com/in/ruthmwongelimuthoka/", Icon: Linkedin, label: "LinkedIn" },
  { href: "https://instagram.com/ruthmwongeli", Icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/ruth.mwongeli.1", Icon: Facebook, label: "Facebook" },
];



function Socials() {
  return (
    <div className="flex justify-center gap-4">
      {socials.map(({ href, Icon, label }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
          className="rounded-full bg-primary p-2.5 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

function Cta({ href = BOOK, children }: { href?: string; children: React.ReactNode }) {
  return (
    <a href={href} className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow transition hover:-translate-y-0.5 hover:shadow-lg">
      {children}
    </a>
  );
}

function Section({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <section className={`px-6 py-20 ${className}`}><div className="mx-auto max-w-4xl">{children}</div></section>;
}

const H = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif text-3xl font-black md:text-4xl">{children}</h2>
);

const options = [
  { t: "Self-Discovery", d: "For young people who are still figuring out who they are and what might suit them.", href: "https://ruecoaching.com/shop/self_discovery_package" },
  { t: "Ready for a Change", d: "For young people who already have a few ideas but are unsure which direction makes the most sense.", href: "https://ruecoaching.com/shop/ready_for_a_change" },
  { t: "Make Your Move", d: "For young people who want to go beyond choosing a career and start building toward one.", href: "https://ruecoaching.com/shop/make_your_move" },
  { t: "Keep Going", d: "For young people who benefit from having someone to check in with as their interests, choices, and goals develop. Periodic conversations provide space to review progress, work through new decisions, reflect on goals and continue exploring what comes next.", href: BOOK },
];

function Index() {
  const [sent, setSent] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  
const [contactSending, setContactSending] = useState(false);

const [contactStatus, setContactStatus] = useState<
  "idle" | "success" | "error"
>("idle");

const handleContactSubmit = async (
  e: FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  if (contactSending) return;

  const form = e.currentTarget;
  const formData = new FormData(form);

  setContactSending(true);
  setContactStatus("idle");

  try {
    const result = await sendContactMessage({
      data: {
        firstName: String(formData.get("firstName") ?? ""),
        lastName: String(formData.get("lastName") ?? ""),
        email: String(formData.get("email") ?? ""),
        message: String(formData.get("message") ?? ""),
        website: String(formData.get("website") ?? ""),
      },
    });

    if (result.success) {
      form.reset();
      setContactStatus("success");
    }
  } catch (error) {
    console.error("Contact form error:", error);
    setContactStatus("error");
  } finally {
    setContactSending(false);
  }
};



  const [socialMenuOpen, setSocialMenuOpen] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  const [showScrollTop, setShowScrollTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

return (
  <main className="font-sans text-foreground">
    <Preloader />

   
   <header className="rue-hero">
 
{/* SOCIAL ICONS AND MOBILE MENU */}
<div className="rue-social-menu">

{/* Hamburger button for mobile */}
<button
  type="button"
  className="rue-menu-toggle"
  onClick={() => setSocialMenuOpen(!socialMenuOpen)}
  aria-label={socialMenuOpen ? "Close social menu" : "Open social menu"}
  aria-expanded={socialMenuOpen}
  aria-controls="rue-social-links"
>
  {socialMenuOpen ? <X size={22} /> : <Menu size={22} />}
</button>

{/* Social media links */}
<div
  id="rue-social-links"
  className={`rue-socials ${socialMenuOpen ? "rue-socials-open" : ""}`}
>
  <a
    href="https://www.linkedin.com/in/ruthmwongelimuthoka/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="LinkedIn"
  >
    <Linkedin />
  </a>

  <a
    href="#"
    aria-label="More links"
  >
    <Bookmark />
  </a>

  <a
    href="https://instagram.com/ruthmwongeli"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <Instagram />
  </a>

  <a
    href="https://www.facebook.com/ruth.mwongeli.1"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Facebook"
  >
    <Facebook />
  </a>
</div>

</div>


  {/* Main hero content */}
  <div className="rue-hero-content">
    <h1>
      Young people shouldn’t have to figure out their future alone.
    </h1>

    <p>
      RueCoaching helps young people understand themselves,
      explore what is possible, and build the confidence
      and skills to make better choices about education,
      career and the future.
    </p>
  </div>
</header>
<section className="rue-about">
  <div className="rue-about-container">
  <ScrollReveal animation="fade-up">

    <h2>What is RueCoaching?</h2>
    </ScrollReveal>

    <div className="rue-about-content">
      <p>
        RueCoaching is EcoRue’s{" "}
        <strong>youth development initiative</strong>{" "}
        focused on{" "}
        <strong>
          career exploration, mentorship, and capacity building.
        </strong>
      </p>

      <p>
        We create space for young people to understand themselves,
        explore different possibilities, ask better questions
        about their future, and develop practical skills that
        help them move forward with greater confidence and direction.
      </p>

      <p>
        <strong>
          The goal is not to tell a young person what career to choose.
        </strong>
        <br />
        It is to help them discover more about who they are,
        what they are capable of, and what possibilities
        may be open to them.
      </p>
    </div>

  </div>
</section>

<section className="rue-why">
  <div className="rue-why-container">

    {/* Left column */}
    <ScrollReveal animation="fade-left">

    <div className="rue-why-left">
      <h2>
        Helping Kids
        <br />
        Discover, Dream,
        <br />
        and Do
      </h2>
    </div>
    </ScrollReveal>

    {/* Right column */}
    <div className="rue-why-right">
    <ScrollReveal animation="fade-up">
      <h3>Why RueCoaching?</h3>
      </ScrollReveal>

      <div className="rue-why-text">
        <p>
          Young people are often expected to make important decisions
          about school, university, and work before they have had
          enough opportunity to explore.
        </p>

        <p>
          Some have never spoken to someone working in the careers
          they are considering.
        </p>

        <p>
          Some know what subjects they enjoy but do not know where
          those interests could lead.
        </p>

        <p>
          Others simply need someone to help them slow down, ask
          the right questions, and make sense of the options in
          front of them.
        </p>

        <p>
          RueCoaching exists to make that exploration easier.
        </p>
      </div>
    </div>

  </div>
</section>

<section className="rue-goal">
  <div className="rue-goal-container">
    <div className="rue-goal-top">
    <ScrollReveal animation="fade-up">
      <h2>The Goal</h2>
      </ScrollReveal>

      <p>
        We want to build a community where young people can access mentors,
        professionals, practical learning experiences, career exposure and
        opportunities to develop skills before important decisions have to be made.
      </p>
    </div>

    <div className="rue-goal-bottom">
      <div className="rue-goal-col rue-goal-left">
        <a href="#" className="rue-goal-link">
          → Become a MENTOR
        </a>
      </div>

      <div className="rue-goal-col rue-goal-center">
        <h3>
          How to Get
          <br />
          Involved
        </h3>

        <p>
          Over time, the goal is to make more of these opportunities freely
          accessible through support from EcoRue, mentors, partners and people
          who believe in helping young people discover how far they can go.
        </p>
      </div>

      <div className="rue-goal-col rue-goal-right">
        <a href="#" className="rue-goal-link">
          → Support RueCoaching
        </a>
      </div>
    </div>

    <div className="rue-goal-rule" />
  </div>
</section>

      

<section className="rue-workshops">
  <div className="rue-workshops-container">

    <div className="rue-workshops-top-line"></div>
    <ScrollReveal animation="fade-up">

    <h2>Group Workshops</h2>
    </ScrollReveal>

    <p>
      Career exploration and capacity-building sessions for schools,
      youth groups, community organizations and other groups.
      Sessions can be adapted around self-discovery, career exploration,
      STEM, future skills, confidence, goal-setting and learning
      from people working in different professions.
    </p>

    <div className="rue-workshops-cta">
      {/*
      <Cta>Discuss a Workshop</Cta>
      */}
      <Cta href="#">Discuss a Workshop</Cta>

    </div>

    <div className="rue-workshops-bottom-line"></div>

  </div>
</section>

      
<section className="rue-meet">
  <div className="rue-meet-container">

    {/* Thin divider at the top */}
    <div className="rue-meet-divider"></div>

    <div className="rue-meet-grid">

      {/* LEFT: Biography */}
      <ScrollReveal animation="fade-up">
      <div className="rue-meet-content">

        <h2>Meet Ruth</h2>

        <div className="rue-meet-text">
          <p className="rue-meet-intro">
            Hi, I’m Ruth, founder of EcoRue and RueCoaching,
            and a mechanical engineer by training.
          </p>

          <p>
            I grew up in Kenya, studied Mechanical Engineering,
            and later moved to South Korea, where I completed
            my PhD and spent more than eight years working in
            advanced materials research.
          </p>

          <p>
            My career has taken me through engineering, research,
            AI-enabled materials discovery, sustainability,
            entrepreneurship, and mentoring. Along the way,
            I have published more than 20 peer-reviewed research
            papers and co-authored three scientific books.
          </p>

          <p className="rue-meet-bold">
            But one thing I have become increasingly interested
            in is what happens before a young person chooses a career.
          </p>

          <p>
            Many young people are expected to make important
            decisions about school, university, and work before
            they have had enough opportunity to understand
            themselves, meet people doing different kinds of work,
            or explore what is actually possible.
          </p>

          <p className="rue-meet-bold">
            RueCoaching grew from wanting to create more room
            for that exploration.
          </p>

          <p>
            I want young people to be able to ask questions,
            try things, meet mentors, discover what they are
            good at, change their minds when necessary,
            and gradually build a future that feels like their own.
          </p>
        </div>
      </div>
      </ScrollReveal>

      {/* RIGHT: Ruth's original photo */}
      <ScrollReveal animation="zoom-in" delay={150}>
      <div className="rue-meet-image">
        <img
          src={RUTH_IMG}
          alt="Dr. Ruth Muthoka, founder of RueCoaching"
        />
      </div>
      </ScrollReveal>
    </div>
  </div>
</section>


    
{/* PRIVATE COACHING SECTION */}
<section className="rue-private-coaching">
  <div className="rue-private-container">

    {/* Thick top divider */}
    <div className="rue-private-top-line" />

    {/* Main heading */}
    <div className="rue-private-intro">
    <ScrollReveal animation="fade-up">
      <h2>Private Coaching</h2>
      </ScrollReveal>

      <p>
        Private coaching is available for young people and families
        who would like more individualized guidance.
      </p>
    </div>

    {/* Thin divider */}
    <div className="rue-private-divider" />

    {/* Coaching options heading */}
    <h3 className="rue-private-options-heading">
      Private Coaching Options
    </h3>

    {/* Three coaching options */}
    <div className="rue-private-options">

      <div className="rue-private-option">
      <ScrollReveal animation="fade-up" delay={0}>

        <h4>Self-Discovery</h4>

        <p>
          For young people who are still figuring out
          who they are and what might suit them.
        </p>
{/*
        <a
          href="https://ruecoaching.com/shop/self_discovery_package"
          className="rue-private-link"
        >
          Learn More
        </a>
        */}
        <a href="#" className="rue-private-link">
  Learn More
</a>
        </ScrollReveal>
      </div>

      <div className="rue-private-option">
      <ScrollReveal animation="fade-up" delay={120}>
        <h4>Ready for a Change</h4>

        <p>
          For young people who already have a few ideas
          but are unsure which direction makes the most sense.
        </p>
{/*
        <a
          href="https://ruecoaching.com/shop/ready_for_a_change"
          className="rue-private-link"
        >
          Learn More
        </a>
        */}

        <a href="#" className="rue-private-link">
  Learn More
</a>
        </ScrollReveal>
      </div>

      <div className="rue-private-option">
      <ScrollReveal animation="fade-up" delay={240}>
        <h4>Make Your Move</h4>

        <p>
          For young people who want to go beyond choosing
          a career and start building toward one.
        </p>
{/*
        <a
          href="https://ruecoaching.com/shop/make_your_move"
          className="rue-private-link"
        >
          Learn More
        </a>

        */}

        <a href="#" className="rue-private-link">
  Learn More
</a>
        </ScrollReveal>
      </div>

    </div>
  </div>
</section>


   
{/* KEEP GOING SECTION */}
<section className="rue-keep-going">
  <div className="rue-keep-going-container">

    <h2>Keep Going</h2>

    <div className="rue-keep-going-content">
      <p>
        For young people who benefit from having someone to
        check in with as their interests, choices, and goals develop.
      </p>

      <p>
        Periodic conversations provide space to review progress,
        work through new decisions, reflect on goals and continue
        exploring what comes next.
      </p>
    </div>


  {/*
    <a
      href="https://ruecoaching.com/shop/free_discovery_call"
      className="rue-keep-going-link"
    >
      See more
    </a>

    */}

    <a href="#" className="rue-keep-going-link">
  See More
</a>

  </div>
</section>


<section className="rue-not-sure">
  <div className="rue-not-sure-container">
  <ScrollReveal animation="fade-left">
    <h2>Not sure where to start?</h2>

    <div className="rue-not-sure-text">
      <p>
        Tell us a little about the young person, what they are trying to
        figure out and what kind of support you are looking for.
      </p>

      <p>
        We can help you decide whether private coaching, mentorship,
        a workshop or another RueCoaching activity makes the most sense.
      </p>
    </div>
    </ScrollReveal>
  </div>
</section>

<section className="rue-contact">
  <div className="rue-contact-overlay"></div>

  <div className="rue-contact-container">
    <h2>Contact US</h2>
    <p className="rue-contact-subtitle">
      Contact us by filling out this contact form
    </p>

    
<form
  className="rue-contact-form"
  onSubmit={handleContactSubmit}
>
  <div className="rue-contact-grid">
    <input
      type="text"
      name="firstName"
      placeholder="First name"
      aria-label="First name"
      autoComplete="given-name"
      required
    />

    <input
      type="text"
      name="lastName"
      placeholder="Last name"
      aria-label="Last name"
      autoComplete="family-name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      aria-label="Email"
      autoComplete="email"
      required
    />

    <input
      type="text"
      name="message"
      placeholder="Write your message here"
      aria-label="Message"
      minLength={10}
      maxLength={5000}
      required
    />
  </div>

  {/* Hidden spam protection field */}
  <div
    aria-hidden="true"
    style={{ position: "absolute", left: "-9999px" }}
  >
    <input
      type="text"
      name="website"
      tabIndex={-1}
      autoComplete="off"
    />
  </div>

  <button
    type="submit"
    className="rue-contact-submit"
    disabled={contactSending}
  >
    {contactSending ? "Sending..." : "Submit"}
  </button>

  {contactStatus === "success" && (
    <p className="rue-contact-success" role="status">
      Thank you for contacting RueCoaching!
      Your message has been sent successfully.
    </p>
  )}

  {contactStatus === "error" && (
    <p className="rue-contact-error" role="alert">
      Sorry, your message could not be sent.
      Please try again.
    </p>
  )}
</form>

  
{/* TERMS AND CONDITIONS */}

<button
  type="button"
  className="rue-contact-terms"
  onClick={() => setShowTerms((prev) => !prev)}
  aria-expanded={showTerms}
  aria-controls="rue-terms-content"
>
  Terms and conditions
</button>

{showTerms && (
  <p id="rue-terms-content" className="rue-contact-terms-content">
    By contacting us, you agree to receive communications from us.
    You can unsubscribe at any time and your contact details will
    not be disclosed to third parties without explicit consent.
  </p>
)}

  </div>
</section>

      
{/* RUECOACHING FOOTER */}
<footer className="rue-footer">
  <div className="rue-footer-container">

    {/* Social media icons */}
    <div className="rue-footer-socials">
      <a
        href="https://www.linkedin.com/in/ruthmwongelimuthoka/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <Linkedin />
      </a>

      <a
        href="#"
        aria-label="More links"
      >
        <Bookmark />
      </a>

      <a
        href="https://instagram.com/ruthmwongeli"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
      >
        <Instagram />
      </a>

      <a
        href="https://www.facebook.com/ruth.mwongeli.1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
      >
        <Facebook />
      </a>
    </div>

    {/* Copyright */}
    <p className="rue-footer-copyright">
  © {new Date().getFullYear()} All Rights Reserved
</p>

{/* Developer Credit */}
<p className="rue-footer-credit">
  Developed by{" "}
  <a
    href="https://letytechconsultancy.co.ke/"
    target="_blank"
    rel="noopener noreferrer"
  >
    LetyTech Consultancy
  </a>
</p>

  

  </div>
</footer>

{/* BACK TO TOP BUTTON */}
{showScrollTop && (
<button
  type="button"
  className="rue-scroll-top"
  onClick={() =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }
  aria-label="Back to top"
  title="Back to top"
>
  <ArrowUp size={24} />
</button>
)}

    </main>
  );
}
