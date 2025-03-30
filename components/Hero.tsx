'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16 bg-secondary">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            いなゆう
            <span className="block text-xl md:text-2xl font-medium text-secondary mt-2">
              エンジニア / システム設計
            </span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0">
            法学部から未経験でエンジニアになり、システム設計とリードを得意とする開発者です。多角的視点と構造化思考が強みです。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/about" 
              className="btn-primary"
            >
              自己紹介を見る
            </Link>
            <Link 
              href="/projects" 
              className="btn-outline"
            >
              ポートフォリオを見る
            </Link>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-light">
            <Image 
              src="/images/ine.jpeg" 
              alt="いなゆう" 
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero