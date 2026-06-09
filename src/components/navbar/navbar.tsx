import './navbar.css'



const Navbar = () =>(
  <>
    <nav className="grid navbar">
      <a className="logo" href="/">Bloom</a>
      <ul className="navlinks">
        <li className="navlink"><a href="/shop">Shop</a></li>
        <li className="navlink"><a href="/new-arrivals">New Arrivals</a></li>
        <li className="navlink"><a href="/sale">Sale</a></li>
        <li className="navlink"><a href="/about">About</a></li>
        <li className="navlink"><a href="/contact">Contact</a></li>
      </ul>
      <button className="btn nav-btn">Join Whatsapp </button>
    </nav> </>) 

export default Navbar;
