import './news-letter.css'
// import whatsappLogo from '../../assets/icons/whatsapp.png'

const NewsLetter= () =>(
  <section className="news_letter">
    <h2 className="news_letter-title">Never Miss a Drop</h2>
    <p className="news_letter-description">New arrivals, exclusive offers and styling inspiration — straight to your inbox.</p>
    <button className="news_letter-btn">
      Join Whatsapp
      {/* <img src={whatsappLogo}/> */}
    </button>
    <p className="small-text">Instant access · Free to join</p>

  </section>
)

export default NewsLetter;
