'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            稲田裕次郎
            <span className="block text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 mt-2">
              エンジニア / システム設計
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
            法学部から未経験でエンジニアになり、システム設計とリードを得意とする開発者です。多角的視点と構造化思考が強みです。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link 
              href="/about" 
              className="bg-blue-500 text-white dark:bg-blue-600 px-4 py-2 rounded-md transition-colors hover:opacity-90"
            >
              自己紹介を見る
            </Link>
            <Link 
              href="/projects" 
              className="border border-blue-500 dark:border-blue-400 text-blue-500 dark:text-blue-400 px-4 py-2 rounded-md transition-colors hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400"
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
          {/* 後でここにプロフィール画像やイラストを追加 */}
          <div className="relative w-64 h-64 bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-5xl font-bold">稲</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero