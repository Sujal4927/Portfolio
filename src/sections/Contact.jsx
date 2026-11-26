import React, { useState } from 'react'
import Button from '../components/Button'
import { FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa'
import { AlertCircle, CheckCircle, Mail, MapPin } from 'lucide-react'
import { EmailJSResponseStatus } from '@emailjs/browser'
import emailjs from "@emailjs/browser";
const Contact = () => {

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-primary " />,
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // success or error
    message: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJs configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon."
      })

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.log("EmailJs error", error);
      setSubmitStatus({
        type: "error",
        message: error.text || "Failed to send message. Please try again later."
      })

    }
    finally {
      setIsLoading(false);
    }
  }
  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-6 mx-auto text-center">
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground mx-auto items-center'>Contact Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 w-full">
          <div className="glass p-5 sm:p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300 w-full min-w-0">
            <form className="space-y-6" onSubmit={handleSubmit}>

              <div className="">
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:rimg-primary outline-none transition-all"
                />
              </div>

              <div className="">
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:rimg-primary outline-none transition-all resize-none" />
              </div>

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading}
              >
                {
                  isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <FaPaperPlane />
                    </>
                  )
                }
              </Button>

              {submitStatus.type && (
                <div className={`flex items-center gap-3
                  p-4 rounded-xl ${submitStatus.type === "success" ?
                    "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`

                }>
                  {
                    submitStatus.type === "success" ? (
                      <CheckCircle className="w-5 h-5 shrink-0" />
                    ) : (<AlertCircle className="w-5 h-5 shrink-0" />)
                  }
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass p-5 sm:p-8 rounded-3xl border border-primary/30 w-full min-w-0">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {
                  contactInfo.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group min-w-0"
                    >
                      <div className="w-12 h-12 min-w-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primry/20 transition-colors">
                        {item.icon}
                      </div>
                      <div className="">
                        <div className="text-sm">
                          {item.label}
                        </div>
                        <div className="text-primary/50 text-sm">{item.value}</div>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

// 2:43:24