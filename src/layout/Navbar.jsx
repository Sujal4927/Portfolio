import Button from "../components/Button"



const Navbar = () => {

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 bg-transparent py-5 ">
      <nav className="container flex items-center mx-auto px-15 justify-between">
        <a href="#" className="text-xl font-bold tracking-tight hover:text-primary ">Portfolio</a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 items-center flex py-1 gap-1">

            {navLinks.map((link, index) => (
              <a href={link.href}
                key={index}
                className="px-4 py-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-surface">
                {link.label}</a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="">
          <Button>Contact Me</Button>
        </div> */}

        {/* Mobile Menu Button */}

      </nav>
    </header>
  )
}

export default Navbar
