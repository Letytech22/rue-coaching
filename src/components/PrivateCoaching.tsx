import ScrollReveal from "./ScrollReveal"

export default function PrivateCoaching (){
    return (

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

)
}