import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Linkedin, Instagram, Facebook, ArrowRight } from "lucide-react";

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
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <main className="font-sans text-foreground">
      <header className="bg-primary px-6 pb-24 pt-10 text-center text-primary-foreground">
        <div className="mx-auto max-w-3xl">
          <p className="font-serif text-2xl font-black tracking-wide text-accent">RueCoaching</p>
          <h1 className="mt-12 font-serif text-4xl font-black leading-tight md:text-6xl">
            Young people shouldn’t have to figure out their future alone.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
            RueCoaching helps young people understand themselves, explore what is possible, and build the confidence and skills to make better choices about education, career and the future.
          </p>
          <div className="mt-10"><Cta>Book a free discovery call <ArrowRight className="h-4 w-4" /></Cta></div>
        </div>
      </header>

      <Section>
        <H>What is RueCoaching?</H>
        <div className="mt-6 space-y-4 text-lg leading-relaxed">
          <p>RueCoaching is EcoRue’s <b>youth development initiative</b> focused on <b>career exploration, mentorship, and capacity building.</b></p>
          <p>We create space for young people to understand themselves, explore different possibilities, ask better questions about their future, and develop practical skills that help them move forward with greater confidence and direction.</p>
          <p className="font-bold">The goal is not to tell a young person what career to choose.</p>
          <p>It is to help them discover more about who they are, what they are capable of, and what possibilities may be open to them.</p>
        </div>
      </Section>

      <Section className="bg-secondary">
        <p className="text-sm font-semibold uppercase tracking-widest text-chart-4">Why RueCoaching?</p>
        <H>Helping Kids Discover, Dream, and Do</H>
        <div className="mt-6 space-y-4 text-lg leading-relaxed">
          <p>Young people are often expected to make important decisions about school, university, and work before they have had enough opportunity to explore.</p>
          <p>Some have never spoken to someone working in the careers they are considering.</p>
          <p>Some know what subjects they enjoy but do not know where those interests could lead.</p>
          <p>Others simply need someone to help them slow down, ask the right questions, and make sense of the options in front of them.</p>
          <p className="font-bold">RueCoaching exists to make that exploration easier.</p>
        </div>
      </Section>

      <Section className="bg-primary text-center text-primary-foreground">
        <H>The Goal</H>
        <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">We want to build a community where young people can access mentors, professionals, practical learning experiences, career exposure and opportunities to develop skills before important decisions have to be made.</p>
        <div className="mt-8"><Cta>→ Become a MENTOR</Cta></div>
      </Section>

      <Section className="text-center">
        <H>How to Get Involved</H>
        <p className="mx-auto mt-6 max-w-2xl text-lg">Over time, the goal is to make more of these opportunities freely accessible through support from EcoRue, mentors, partners and people who believe in helping young people discover how far they can go.</p>
        <div className="mt-8"><Cta>→ Support RueCoaching</Cta></div>
      </Section>

      <Section className="bg-card">
        <div className="rounded-2xl border-2 border-primary p-10 text-center">
          <H>Group Workshops</H>
          <p className="mx-auto mt-6 max-w-2xl text-lg">Career exploration and capacity-building sessions for schools, youth groups, community organizations and other groups. Sessions can be adapted around self-discovery, career exploration, STEM, future skills, confidence, goal-setting and learning from people working in different professions.</p>
          <div className="mt-8"><Cta>Discuss a Workshop</Cta></div>
        </div>
      </Section>

      <Section className="bg-secondary">
        <div className="grid items-start gap-10 md:grid-cols-[1fr_320px]">
          <div>
            <H>Meet Ruth</H>
            <div className="mt-6 space-y-4 leading-relaxed">
              <p className="font-bold italic">Hi, I’m Ruth, founder of EcoRue and RueCoaching, and a mechanical engineer by training.</p>
              <p>I grew up in Kenya, studied Mechanical Engineering, and later moved to South Korea, where I completed my PhD and spent more than eight years working in advanced materials research.</p>
              <p>My career has taken me through engineering, research, AI-enabled materials discovery, sustainability, entrepreneurship, and mentoring. Along the way, I have published more than 20 peer-reviewed research papers and co-authored three scientific books.</p>
              <p className="font-bold">But one thing I have become increasingly interested in is what happens before a young person chooses a career.</p>
              <p>Many young people are expected to make important decisions about school, university, and work before they have had enough opportunity to understand themselves, meet people doing different kinds of work, or explore what is actually possible.</p>
              <p className="font-bold">RueCoaching grew from wanting to create more room for that exploration.</p>
              <p>I want young people to be able to ask questions, try things, meet mentors, discover what they are good at, change their minds when necessary, and gradually build a future that feels like their own.</p>
            </div>
          </div>
          <img src={RUTH_IMG} alt="Ruth, founder of RueCoaching" className="w-full rounded-2xl border-4 border-accent object-cover shadow-xl" />
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <H>Private Coaching</H>
          <p className="mx-auto mt-4 max-w-2xl text-lg">Private coaching is available for young people and families who would like more individualized guidance.</p>
          <h3 className="mt-12 font-serif text-2xl font-bold">Private Coaching Options</h3>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {options.map((o) => (
            <a key={o.t} href={o.href} className="group flex flex-col rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-lg">
              <h4 className="font-serif text-xl font-bold">{o.t}</h4>
              <p className="mt-3 flex-1 text-muted-foreground">{o.d}</p>
              <span className="mt-5 inline-flex items-center gap-1 font-semibold group-hover:text-chart-4">Learn More <ArrowRight className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-accent text-center text-accent-foreground">
        <H>Not sure where to start?</H>
        <p className="mx-auto mt-6 max-w-2xl font-semibold">Tell us a little about the young person, what they are trying to figure out and what kind of support you are looking for.</p>
        <p className="mx-auto mt-3 max-w-2xl">We can help you decide whether private coaching, mentorship, a workshop or another RueCoaching activity makes the most sense.</p>
        <a href={BOOK} className="mt-8 inline-flex rounded-full bg-primary px-7 py-3 font-semibold text-primary-foreground">Book a free discovery call</a>
      </Section>

      <Section>
        <div className="mx-auto max-w-xl text-center">
          <H>Contact Us</H>
          <p className="mt-3 text-muted-foreground">Contact us by filling out this contact form</p>
        </div>
        {sent ? (
          <p className="mx-auto mt-8 max-w-xl rounded-xl bg-card p-6 text-center font-semibold ring-1 ring-border">Thank you! We’ll be in touch soon.</p>
        ) : (
          <form onSubmit={submit} className="mx-auto mt-8 grid max-w-xl gap-4">
            {[["name", "Name", "text"], ["email", "Email", "email"], ["phone", "Phone", "tel"]].map(([n, l, t]) => (
              <input key={n} name={n} type={t} placeholder={l} required={n !== "phone"} className="rounded-lg border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
            ))}
            <textarea name="message" placeholder="Message" rows={4} required className="rounded-lg border border-input bg-card px-4 py-3 outline-none focus:ring-2 focus:ring-ring" />
            <button className="rounded-full bg-primary py-3 font-semibold text-primary-foreground hover:opacity-90">Submit</button>
            <p className="text-xs text-muted-foreground">By contacting us, you agree to receive communications from us. You can unsubscribe at any time and your contact details will not be disclosed to third parties without explicit consent.</p>
          </form>
        )}
      </Section>

      <footer className="bg-primary px-6 py-10 text-center text-primary-foreground">
        <Socials />
        <p className="mt-4 text-sm opacity-80">©2026 RueCoaching. All Rights Reserved</p>
      </footer>
    </main>
  );
}
