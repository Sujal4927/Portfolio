import Button from '../components/Button'
import { ArrowRight, Download } from 'lucide-react'
import AnimatedBorderButton from '../components/AnimatedBorderButton'
import { FaGithub, FaLinkedin } from 'react-icons/fa'


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

  return (
    <section className='relative min-h-screen lg:min-h-0 py-8 lg:py-16 flex items-center overflow-hidden'>
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
      <div className="container mx-auto px-4 pt-16 pb-8 lg:pt-10 lg:pb-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left Column - text content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="animate-fade-in">
              <span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary'>
                <span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
                Full Stack Developer
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>Building
                <span className='text-primary glow-text'> Scalable</span> <br /> Web Solutions
              </h2>

              <p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
                Hi, I'm Sujal - a full stack developer specializing in
                Javascript, Reactjs. I build scalable, performant web applications.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <a href="/#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className='w-5 h-5' />
                </Button>
              </a>
              <a href="/Resume.pdf">
                <AnimatedBorderButton>
                  <Download className='w-5 h-5' />
                  Resume
                </AnimatedBorderButton>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className='text-lg text-muted-foreground'>Follow me: </span>
              {[
                { icon: FaGithub, href: "https://github.com/Sujal4927" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/sujal-waghmare49/" },
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
            <div className="relative w-full max-w-55 lg:max-w-sm sm:max-w-xs mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent
              to-primary/10 blur-2xl animate-pulse" />
              <div className="relative rounded-3xl glass p-0.5 glow-border">
                <img src="/hero-image.png" alt="image" className='w-full aspect-4/5 object-cover rounded-2xl' />

                {/* Floating Badge */}
                <div className="absolute -bottom-3 -right-3 glass rounded-xl px-3 py-2 animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs sm:text-sm font-medium">Available For Work</span>
                  </div>
                </div>
                {/* Stats Badge */}
                {/* <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-xs text-muted-foreground">Years Exp.</div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        {/* <div className="mt-20 animate-fade-in animation-delay-600">
          <p className='text-sm text-muted-foreground mb-6 text-center'>Technologies I work with</p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div className="shrink-0 px-8 py-2" key={idx}>
                  <span className='text-xl text-muted-foregound font-semibold hover:text-primary/50 transition-colors'>
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section >
  )
}

export default Hero

