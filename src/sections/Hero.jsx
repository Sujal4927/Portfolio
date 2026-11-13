import React from 'react'
import Button from '../components/Button'
import { ArrowRight, Download } from 'lucide-react'
import AnimatedBorderButton from '../components/AnimatedBorderButton'
import { FaChevronDown, FaGithub, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from 'react-icons/fa'
import { SiCplusplus, SiCss, SiExpress, SiGit, SiGithub, SiHtml5, SiJavascript, SiMongodb } from 'react-icons/si'



const Hero = () => {

  const skills = [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "HTML",
    "CSS",
    "Javascript",
    "C++",
    "Git",
    "GitHub"
  ];

  const logos = [
    <FaReact />,
    <FaNodeJs />,
    <SiExpress />,
    <SiMongodb />,
    <SiHtml5 />,
    <SiCss />,
    <SiJavascript />,
    <SiCplusplus />,
    <SiGit />,
    <SiGithub />
  ];

  return (
    <section className='relative min-h-screen flex items-center overflow-hidden'>
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="hero-image"
          className='w-full h-full object-cover opacity-40' />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80  to-background"></div>
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift 
              ${15 + Math.random() * 20}s 
              ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }} />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-12 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - text content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Full Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>Turning ideas
                <br />
                into <span className='text-primary glow-text'>reality</span>
                <br />
                through <span className='font-serif italic normal text-white'>code.</span>
              </h1>

              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                Hi, I'm Sujal - a full stack developer specializing in
                Javascript, Reactjs. I build scalable, performant web applications.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className='w-5 h-5' />
              </Button>
              <AnimatedBorderButton>
              <Download className='w-5 h-5'/>
                Resume
              </AnimatedBorderButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className='text-lg text-muted-foreground'>Follow me: </span>
              {[
                { icon: FaGithub, href: "#" },
                { icon: FaLinkedin, href: "#" },
                { icon: FaTwitter, href: "#" },
              ].map((social, idx) => (
                <a key={idx} href={social.href}
                  className='p-2 glass rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300'>
                  {<social.icon className='w-5 h-5' />}</a>
              ))}
            </div>
          </div>
          {/* Right Column - text content */}
          <div className="relative animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent
              to-primary/10 blur-2xl animate-pulse" />
              <div className="relative rounded-3xl glass p-2 glow-border">
                <img src="/hero-image.png" alt="image" className='w-full aspect-4/5 object-cover rounded-2xl' />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">Available For Work</span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {/* {[...logos, ...logos].map((logo, idx) => (
                  <div className="shrink-0 px-8 py-2" key={idx}>
                    <span className='text-3xl text-muted-foregound font-semibold hover:text-primary/50 transition-colors'>
                      {logo}
                    </span>
                  </div>
                ))} */}

              {[...skills, ...skills].map((skill, idx) => (
                <div className="shrink-0 px-8 py-2" key={idx}>
                  <span className='text-xl text-muted-foregound font-semibold hover:text-primary/50 transition-colors'>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800">
        <a href="#about"
          className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary'>
          <span className='text-xs uppercase tracking-wider'>Scroll</span>
          <FaChevronDown className='w-6 h-6 animate-bounce' />
        </a>
      </div>
    </section >
  )
}

export default Hero

// 1:24:24