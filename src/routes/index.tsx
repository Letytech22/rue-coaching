import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, type FormEvent } from "react";
import { Linkedin, Instagram, Facebook, ArrowRight,ArrowUp, Bookmark,Menu,
  X, } from "lucide-react";

import Preloader from "../components/Preloader";
import ScrollReveal from "../components/ScrollReveal";
import { sendContactMessage } from "../lib/contact.functions";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WhyRueCoaching from "@/components/WhyRueCoaching";
import GoalSection from "@/components/GoalSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import MeetRuthSection from "@/components/MeetRuthSection";
import PrivateCoaching from "@/components/PrivateCoaching";
import KeepGoingSection from "@/components/KeepGoingSection";
import NotSureSection from "@/components/NotSureSection";
import FooterSection from "@/components/FooterSection";
import BackToTop from "@/components/BackToTop";


const RUTH_IMG =
  "https://cdn.beacons.ai/user_content/JxroMmCoXLaA9O3WtmUClyUgrd82/referenced_images/d752c8fb-7e24-49cf-b30d-fb673c054bfd__website__92d33d80-fb58-4be1-bfc7-957b452329df__content__homepage__a3f7e9c4-4c46-4850-9c3a-0aac4fdcbbe2__819dfc35-6bc6-4170-9dfd-85b1136cf80a.webp?t=1761046154229";
const BOOK = "https://ruecoaching.com/shop/free_discovery_call";




const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "RueCoaching",
  url: "https://ruecoaching.com/",
  description:
    "A youth development initiative focused on career exploration, mentorship, coaching and capacity building.",
  sameAs: [
    "https://www.linkedin.com/in/ruthmwongelimuthoka/",
    "https://instagram.com/ruthmwongeli",
    "https://www.facebook.com/ruth.mwongeli.1",
  ],
};



export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "RueCoaching | Career Guidance & Mentorship for Young People",
      },
      {
        name: "description",
        content:
          "RueCoaching helps young people explore careers, discover their strengths, build confidence and plan their future through mentorship, private coaching and workshops.",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        property: "og:title",
        content: "RueCoaching ",
      },
      {
        property: "og:description",
        content:
          "Career exploration, mentorship and private coaching to help young people make confident decisions about their future.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://ruecoaching.com/",
      },
      {
        property: "og:image",
        content: RUTH_IMG,
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "RueCoaching | Mentorship and coaching for young people",
      },
      {
        name: "twitter:description",
        content:
          "Career guidance, mentorship and coaching for young people.",
      },
      {
        name: "twitter:image",
        content: RUTH_IMG,
      },
    ],
    links: [
      {
        rel: "canonical",
        href: "https://ruecoaching.com/",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema),
      },
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

useEffect(() => {
  if (contactStatus !== "success") return;

  const timer = window.setTimeout(() => {
    setContactStatus("idle");
  }, 120000); // 2 minutes

  return () => window.clearTimeout(timer);
}, [contactStatus]);

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

   {/* components section */}
   <HeroSection/>
<AboutSection/>

<WhyRueCoaching/>

<GoalSection/>
      

<WorkshopsSection/>

      
<MeetRuthSection/>

    
{/* PRIVATE COACHING SECTION */}
<PrivateCoaching/>


   
{/* KEEP GOING SECTION */}
<KeepGoingSection/>

{/* Not SURE SECTION */}
<NotSureSection/>

{/* CONTACT US SECTION */}

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
<FooterSection/>

{/* BACK TO TOP BUTTON */}
<BackToTop/>

    </main>
  );
}
