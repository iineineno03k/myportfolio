'use client'

import { motion } from 'framer-motion'

interface TimelineItemProps {
  year: string
  title: string
  description: string
  index: number
}

const TimelineItem = ({ year, title, description, index }: TimelineItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-8 flex"
    >
      <div className="flex flex-col items-center mr-4">
        <div className="w-px h-full border-standard flex-grow mb-2"></div>
        <div className="w-px h-full border-standard flex-grow mt-2"></div>
      </div>
      <div className="card flex-grow">
        <div className="text-sm text-muted">{year}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="mb-0">{description}</p>
      </div>
    </motion.div>
  )
}

interface TimelineProps {
  items: {
    year: string
    title: string
    description: string
  }[]
}

const Timeline = ({ items }: TimelineProps) => {
  return (
    <div className="relative py-8">
      {items.map((item, index) => (
        <TimelineItem
          key={index}
          year={item.year}
          title={item.title}
          description={item.description}
          index={index}
        />
      ))}
    </div>
  )
}

export default Timeline