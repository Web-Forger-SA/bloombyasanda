import './about.css'


const About = () => (
  <section className='about_section' id='about'>
    <div className='about_section-left'>
      <header className='about_section-left-header'>
        <h6 className='small-text'>Our Story</h6>
        <div className='underline'></div>
      </header>
      <article className='about_section-left-article'>
        <h2 className='about_section-left-title'>Crafted with purpose</h2>
        <div className='about_section-left-text-content'>
          <p className='about_section-text'>Born in Durban in April 2026, Bloom started with a single belief — every woman deserves to carry something beautiful. We're an online store on a mission to elevate women's style through carefully curated handbags, sourced and delivered directly to your door.</p>
          <br />
          <p className='about_section-text'>From structured totes to delicate mini bags, every piece in our collection is chosen for quality, style, and longevity — whether you're shopping for yourself or building a boutique business.</p>
        </div>
        <button role="link" className='about_section-left-button'>Explore Our Collection</button>
      </article>
    </div>
    <div className='about_section-right'></div>

  </section>
)

export default About;
