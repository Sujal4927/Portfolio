import React from 'react'
import Button from '../components/Button'
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { LuMail } from 'react-icons/lu'
import { MdLocationOn } from 'react-icons/md'
import { Mail, MapPin } from 'lucide-react'

const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      label: "Email",
      value: "sujalwaghmare8471@gmail.com",
      href: "maito:sujalwaghmare8471@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      label: "Location",
      value: "Mumbai, India",
      href: "#",
    },
  ]

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground mx-auto items-center'>Contact Me</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
            <form className="space-y-6">

              <div className="">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:rimg-primary outline-none transition-all"
                />
              </div>

              <div className="">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:rimg-primary outline-none transition-all"
                />
              </div>

              {/* <div className="">
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  required
                  placeholder="What's this about"
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:rimg-primary outline-none transition-all"
                />
              </div> */}

              <div className="">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Your message..."
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:rimg-primary outline-none transition-all resize-none" />
              </div>

              <Button className="w-full" type="submit" size="lg">
                Send Message
                <FaPaperPlane />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass p-8 rounded-3xl border border-primary/30">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {
                  contactInfo.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primry/20 transition-colors">
                        {item.icon}
                      </div>
                      <div className="">
                        <div className="text-sm">
                          {item.label}
                        </div>
                        <div className="text-primary/50 font-medium">{item.value}</div>
                      </div>
                    </a>
                  ))
                }
              </div>
            </div>

            {/* Connect  */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xl font-semibold">Connect</span>
              </div>
              <div className="grid grid-cols-2 gap-15">
                <a href="https://www.linkedin.com/in/sujal-waghmare49/" className="flex items-center gap-3 p-4 border border-primary/30 rounded-xl  hover:bg-surface hover:text-primary/50">
                  <FaLinkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a href="https://github.com/Sujal4927" className="flex items-center gap-3 p-4 rounded-xl border border-primary/30  hover:bg-surface hover:text-primary/50 ">
                  <FaGithub className="w-5 h-5 " />
                  <span className="font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
