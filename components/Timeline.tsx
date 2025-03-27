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
        <div className="w-px h-full bg-gray-300 dark:bg-gray-600 flex-grow mb-2"></div>
        <div className="rounded-full bg-primary-light dark:bg-primary-dark w-8 h-8 flex items-center justify-center text-white font-bold text-sm">
          {index + 1}
        </div>
        <div className="w-px h-full bg-gray-300 dark:bg-gray-600 flex-grow mt-2"></div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-4 flex-grow">
        <div className="text-sm text-gray-500 dark:text-gray-400">{year}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
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