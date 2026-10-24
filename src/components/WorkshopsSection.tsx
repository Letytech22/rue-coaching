import ScrollReveal from "./ScrollReveal"

export default function WorkshopsSection(){
    return (

 

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
  <a
    href="#"
    className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 font-semibold text-accent-foreground shadow transition hover:-translate-y-0.5 hover:shadow-lg"
  >
    Discuss a Workshop
  </a>
</div>

    <div className="rue-workshops-bottom-line"></div>

  </div>
</section>

)
}