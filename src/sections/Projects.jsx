import { ArrowUpRight } from 'lucide-react'
import React from 'react'
import { FaEye, FaGithub } from 'react-icons/fa'
import AnimatedBorderButton from '../components/AnimatedBorderButton'

const Projects = () => {

  const projects = [
    {
      title: "CarRental",
      description: "A sophisticated car renting and management system featuring real-time car booking and comprehensive admin controls. Built using MERN stack with user-friendly interfaces.",
      image: "/projects/carrental.png",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCss"],
      link: "#",
      github: "https://github.com/Sujal4927/Car-Rental"
    },
    {
      title: "ExamNotes AI",
      description: "Generative AI-powered study and revision platform that generates notes, extracts key topics and engineered interactive data visualizations and dynamic charts using React and charting libraries, optimizing render performance for complex datasets.",
      image: "/projects/Examnotes.JPG",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Firebase", "Gemini API", "Recharts", "TailwindCss"],
      link: "#",
      github: "https://github.com/Sujal4927/ExamNotes-AI"
    },
    {
      title: "JobAxis",
      description: "A comprehensive full-stack job portal connecting jobseekers with recruiters, supporting job discovery, online applications, and resume uploads and application-status tracking. Enabled interactive and real-time data streaming recruiter dashboard functionality to create and manage job postings and review candidate applications.",
      image: "/projects/jobaxis.JPG",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "TailwindCss"],
      link: "#",
      github: "https://github.com/Sujal4927/JobAxis"
    },
  ]

  return (
    <section id="projects" className="py-16 relative overflow-hidden">
      {/* bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-12 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto mb-16 max-w-3xl">
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>My Projects</h2>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >

              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 opacity-60" />

                {/* Overlays links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.link} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <ArrowUpRight className='w-6 h-6' />
                  </a>
                  <a href={project.github} className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'>
                    <FaGithub className='w-6 h-6' />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className='text-xl font-semibold group-hover:text-primary transition-colors'>{project.title}</h3>
                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:translate-y-1 transition-all" />
                </div>
                <p className='text-muted-foreground text-md'>{project.description}</p>
                <div className="flex flex-wrap gap-2 ">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className='px-4 py-1.5 rounded-full bg-surface text-md font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* view all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a href="https://github.com/Sujal4927">
            <AnimatedBorderButton>
              View More on GitHub
              <ArrowUpRight className='w-5 h-5' />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

// 1:52:00