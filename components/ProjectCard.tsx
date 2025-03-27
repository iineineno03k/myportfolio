'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface TechBadgeProps {
  name: string
}

const TechBadge = ({ name }: TechBadgeProps) => (
  <span className="inline-block bg-secondary text-secondary text-xs px-2 py-1 rounded-md mr-2 mb-2">
    {name}
  </span>
)

interface ProjectCardProps {
  title: string
  description: string
  imageSrc?: string
  technologies: string[]
  demoLink?: string
  codeLink?: string
  index: number
}

const ProjectCard = ({ 
  title, 
  description, 
  imageSrc, 
  technologies, 
  demoLink, 
  codeLink,
  index
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="card hover:translate-y-[-5px] transition-transform"
    >
      {imageSrc && (
        <div className="relative h-48 mb-4 overflow-hidden rounded-md">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      
      <p className="mb-4">
        {description}
      </p>
      
      <div className="mb-4">
        {technologies.map((tech, i) => (
          <TechBadge key={i} name={tech} />
        ))}
      </div>
      
      <div className="flex space-x-4">
        {demoLink && (
          <Link
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            デモを見る
          </Link>
        )}
        
        {codeLink && (
          <Link
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            コードを見る
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default ProjectCard