import './faq.css';
import { useState } from "react";
import dropdown from "../../assets/icons/dropdown.png"
import orderLogo from "../../assets/icons/conversation.png"
import deliverLogo from "../../assets/icons/truck.png"
import paymentLogo from "../../assets/icons/credit-card.png"
import packageLogo from "../../assets/icons/box.png"
import handbagLogo from '../../assets/icons/handbag.png'


const faqs = [
  {
    logo: orderLogo,
    question: "How do I place an order?",
    answer: "Contact us on WhatsApp with the name of the bag you wish to order."
  },
  {
    logo: deliverLogo,
    question: "How long does delivery take and how much does it cost?",
    answer: "We deliver via PAXI, straight to your nearest PEP store. Delivery usually takes 3–7 working days once your order is confirmed. Exact cost and timing will be confirmed with you on WhatsApp once you place your order."
  },
  {
    logo: paymentLogo,
    question: "What payment methods do you accept?",
    answer: "Payment is via EFT only, directly into our bank account. Once you send your order on WhatsApp, we'll reply with our banking details. Your bag is reserved once payment reflects."
  },
  {
    logo: packageLogo,
    question: "Can I return or exchange a bag?",
    answer: "We're still finalising our returns and exchanges policy. In the meantime, please double-check colours, sizes, and details before confirming your order on WhatsApp — our team is happy to answer any questions beforehand to help you choose right."
  },
  {
    logo: handbagLogo,
    question: "I want to resell Bloom bags, how does the progeamme work?",
    answer: "Our reseller programme is simple: order a minimum of 3 bags per purchase, and mix and match styles and colours as you like. Message us on WhatsApp to get started — we'll walk you through current stock and pricing for resellers."

  },
]

const Faq = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index:number) => {
    if(index == openIndex){
      index = null;
    }
    setOpenIndex(index);
  }


  return (
  <section className="faq_section" id="faq-section">
    <div className="faq_section-header">
      <h6>Frequently Asked Questions</h6>
      <h2>Your Questions Answered</h2>
    </div>

    <div className="faq_section-body">
      {
        faqs.map((faq, index) =>{
          return(
            <div className="accordion" key={index}>
              <button type="button" className="accordion-btn" onClick={() => handleClick(index)}>
                <img src={faq.logo} className="accordion-logo"/>
                <span>{faq.question}</span>
                <img src={dropdown} className="dropdown-logo"/>
              </button>
              <p className={openIndex === index ? 'active' : 'not-active'}>{faq.answer}</p>
            </div>
          );
        })
      }
      </div>
  </section>
  )
}

export default Faq;
