import ScrollReveal from "./ScrollReveal"

export default function AboutSection (){
    return(
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

)
}