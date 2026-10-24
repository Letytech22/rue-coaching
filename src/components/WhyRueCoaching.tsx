import ScrollReveal from "./ScrollReveal"

export default function WhyRueCoaching (){
    return (

 

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

)
}