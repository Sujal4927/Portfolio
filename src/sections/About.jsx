import React from 'react'
import { FaCode, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time."
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Optimizing for speed and delivering lightning-fast user experiences."
    },
    {
      icon: <FaUsers />,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Staying ahead with the latest technologies and best practices."
    },
  ]
  return (
    <>
      <section id='about' className="py-16 relative overflow-hidden">
        <div className='container relative mx-auto px-12 z-10'>
          {/* <div className="grid lg:grid-cols-2 gap-16 items-center"> */}
          {/* Left column */}
          <div className="space-y-8">
            <div className="animate-fade-in text-center">
              <span className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>About Me</span>
            </div>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I am a Full stack developer with a strong foundation in programming and development. I am proficient in C++. My expertise extends to front-end technologies such as JavaScript, ReactJS. On the backend, I have hands-on experience with frameworks like Node.js, Express.js. My strong problem-solving skills, particularly in Data Structures and Algorithms & OOPS Concepts, enable me to effectively address complex technical challenges
              </p>

              <p>
                I specialize in building landing pages to complex enterprise applications.My portfolio includes diverse projects such as full-stack car renting platform, AI platform for generating exam notes and job searching web application for job seekers.
              </p>

              <p>
                I am adaptable and hard-working, with strong problem-solving abilities and critical thinking skills. I excel in teamwork, effectively collaborating with others to achieve common goals. My dedication to continuous learning and improvement drives me to consistently deliver high-quality results.
              </p>
            </div>

            {/* <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className='text-lg font-medium italic text-foreground'>
                "My mission is to create digital experiences that are not just functional, but truly delightful - products that users love to use and developers love to maintain."
              </p>
            </div> */}
          </div>

          {/* Right column */}
          {/* <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, idx) => (
                <div
                  className="glass p-6 rounded-2xl animate-fade-in"
                  key={idx}
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                    <span className='text-2xl text-primary items-center justify-center'>{item.icon}</span>
                  </div>
                  <h3 className='text-lg font-semibold mb-2'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>{item.description}</p>
                </div>
              ))}
            </div> */}
        </div>
        {/* </div> */}
      </section>
    </>
  )
}

export default About

// 1:36:29