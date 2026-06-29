import './process.css'


const Process = () => (
  <section className='ordering-process__section'>
    <div className='ordering-process__header' id='ordering-process__side-header'>
      <span className='small-text'>Simple Process</span>
      <h3 className='ordering-process__title'>How <span className='title-style'><i>ordering</i></span> works</h3>
    </div>

    <div className='ordering-process__steps' id='ordering-steps'>
      <div className='ordering-process__step' id='step-1'>
        <h4 className='ordering-process__step-number'>01</h4>
        <h5 className='ordering-process__step-title'>Browse & Select</h5>
        <p className='ordering-process__step-description'>Browse our full collection. Find the bags you love and add them to your order — mix styles and colours freely.</p>
      </div>


      {/* Second Step */}
      <div className='ordering-process__step' id='step-2'>
        <h4 className='ordering-process__step-number'>02</h4>
        <h5 className='ordering-process__step-title'>Order via Whatsapp</h5>
        <p className='ordering-process__step-description'>When ready, click "Place Order via WhatsApp." Your selected bags are sent directly to us as a message — no forms, no fuss.</p>
      </div>

      {/* Third Step */}
      <div className='ordering-process__step' id='step-3'>
        <h4 className='ordering-process__step-number'>03</h4>
        <h5 className='ordering-process__step-title'>We Deliver via Paxsy</h5>
        <p className='ordering-process__step-description'>We confirm your order, arrange payment, and ship directly to your door nationwide via Paxsy. Fast, reliable, trackable.</p>
      </div>

    </div>

  </section>
)

export default Process;
