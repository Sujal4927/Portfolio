import { motion } from "motion/react"
import { FaCss3, FaGitAlt, FaHtml5, FaNodeJs, FaPython, FaReact } from "react-icons/fa"
import { FaGithub } from "react-icons/fa6"
import { SiExpress, SiJavascript, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si"
import { TbApi, TbBrandCpp } from "react-icons/tb"

const Skills = () => {

  const languages = [
    {
      icon: <TbBrandCpp />,
      name: "C++",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiJavascript />,
      name: "JavaScript",
    },
  ]

  const frontend = [
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "TailwindCSS",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3 />,
      name: "CSS",
    },
  ]

  const backend = [
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <TbApi />,
      name: "Rest APIs",
    },
  ]

  const database = [
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiMysql />,
      name: "MySql",
    },
    {
      icon: <FaGitAlt />,
      name: "Git",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
  ]
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto my-6 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className='text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>
            Skills
          </motion.h2>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-12 ">
          {/* 1st left box */}
          <div className="">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-3xl font-semibold">
                Programming Languages
              </motion.h3>
            </div>
            <div className="grid grid-cols-2 gap-8 py-6 sm:grid-cols-2">
              {languages.map((lang, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  key={idx}
                  className="min-w-3 flex flex-col items-center justify-center text-center glass p-6 rounded-2xl border border-primary/10 hover:border-primary backdrop-blur"
                >
                  <div className="px-3 py-3 items-center text-center rounded-2xl bg-linear-to-b from-primary/50 via-primary/75 to-primary">
                    <span className="text-4xl">{lang.icon}</span>
                  </div>
                  <span className="text-lg pt-1 font-semibold">{lang.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 1st Right box */}
          <div className="">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-3xl font-semibold">
                Frontend Development
              </motion.h3>
            </div>
            <div className="grid grid-cols-2 gap-8 py-6 sm:grid-cols-2">
              {frontend.map((front, fidx) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  key={fidx}
                  className="min-w-3 flex flex-col items-center justify-center text-center glass p-6 rounded-2xl border border-primary/10 hover:border-primary"
                >
                  <div className="px-3 py-3 items-center text-center rounded-2xl bg-linear-to-b from-primary/50 via-primary/75 to-primary">
                    <span className="text-4xl">{front.icon}</span>
                  </div>
                  <span className="text-lg pt-1 font-semibold">{front.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2nd left box */}
          <div className="">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-3xl font-semibold">
                Backend Development
              </motion.h3>
            </div>
            <div className="grid grid-cols-2 gap-8 py-6 sm:grid-cols-2">
              {backend.map((back, bidx) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  key={bidx}
                  className="min-w-3 flex flex-col items-center justify-center text-center glass p-6 rounded-2xl border border-primary/10 hover:border-primary"
                >
                  <div className="px-3 py-3 items-center text-center rounded-2xl bg-linear-to-b from-primary/50 via-primary/75 to-primary">
                    <span className="text-4xl">{back.icon}</span>
                  </div>
                  <span className="text-lg pt-1 font-semibold">{back.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* 2nd right box */}
          <div className="">
            <div className="text-center">
              <motion.h3
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="text-3xl font-semibold">
                Databases & Version Control
              </motion.h3>
            </div>
            <div className="grid grid-cols-2 gap-8 py-6 sm:grid-cols-2">
              {database.map((data, didx) => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: false,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  key={didx}
                  className="min-w-3 flex flex-col items-center justify-center text-center glass p-6 rounded-2xl border border-primary/10 hover:border-primary"
                >
                  <div className="px-3 py-3 items-center text-center rounded-2xl bg-linear-to-b from-primary/50 via-primary/75 to-primary">
                    <span className="text-4xl">{data.icon}</span>
                  </div>
                  <span className="text-lg pt-1 font-semibold">{data.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
