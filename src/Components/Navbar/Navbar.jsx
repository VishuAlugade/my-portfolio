import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-title">
        <h1>Portfolio</h1>
      </div>
        <ul className="nav-menu">
            <li><AnchorLink className='anchor-link' href='#home'><p>Home</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p>About Me</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#education'><p>Education</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#projects'><p>Projects</p></AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p>Contact</p></AnchorLink></li>
        </ul>
    </div>
  )
}

export default Navbar