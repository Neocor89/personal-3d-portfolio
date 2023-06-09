import { motion } from "framer-motion"
import { Tilt } from "react-tilt"
import { styles } from "../styles"
import { github } from "../assets"
import { demo } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
// import { fadeIn, textVariant } from "../utils/motion"
// BEF : w-8 h-8 md:w-10 md:h-10
const ProjectCard = (
    {
      index, name, description, 
     tags, image, source_code_link, demo_project, 
    }
  ) => {
    return (
      <motion.div>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className="bg-gradient-to-t from-[#1d1836] to-[#362c62] p-5 md:p-4 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[210px]">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover rounded-2xl" 
            />

            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div 
                onClick={() => window.open(demo_project, "_blank")}
                className="bg-gradient-to-t from-[#493e82] to-[#69ccab] w-12 h-12 md:w-9 md:h-9 rounded-full flex justify-center items-center cursor-pointer mr-4 md:mr-2"
              >
                <img src={demo} alt="demo project" title="Demo Project" className="w-1/2 h-1/2 object-contain" />
              </div>

              <div 
                onClick={() => window.open(source_code_link, "_blank")}
                className="bg-gradient-to-t from-[#493e82] to-[#69ccab] w-12 h-12 md:w-9 md:h-9 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img src={github} alt="github" title="View Code" className="w-1/2 h-1/2 object-contain" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
              <p className="mt-2 text-secondary text-[14px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p 
                key={tag.name} 
                className={`text-[14px] ${tag.color}`}
              >
                # {tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>
    )
}


const Works = () => {
  return (
    <>
       <motion.div>
        <p className={`${styles.sectionSubText}`}>
          My Work
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Whether it was for graduation or over the years, I've had the opportunity to work on several exciting projects, using a variety of technologies including React, React Native, Nextjs, SQL, MongoDB. Some examples of my work include.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`} 
            index={index} 
            {...project} 
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");