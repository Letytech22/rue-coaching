import ScrollReveal from "./ScrollReveal"

const RUTH_IMG =
  "https://cdn.beacons.ai/user_content/JxroMmCoXLaA9O3WtmUClyUgrd82/referenced_images/d752c8fb-7e24-49cf-b30d-fb673c054bfd__website__92d33d80-fb58-4be1-bfc7-957b452329df__content__homepage__a3f7e9c4-4c46-4850-9c3a-0aac4fdcbbe2__819dfc35-6bc6-4170-9dfd-85b1136cf80a.webp?t=1761046154229";
const BOOK = "https://ruecoaching.com/shop/free_discovery_call";


export default function MeetRuthSection (){
    return (


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

)
}

