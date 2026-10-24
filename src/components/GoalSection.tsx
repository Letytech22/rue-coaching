import ScrollReveal from "./ScrollReveal"

export default function GoalSection(){
    return (

 
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

)
}

