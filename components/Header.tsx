'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'ホーム', href: '/' },
    { name: '自己紹介', href: '/about' },
    { name: 'ポートフォリオ', href: '/projects' },
    // { name: 'ブログ', href: '/blog' }, // 後で実装
  ]

  return (
    <header 
      className={`fixed w-full z-10 transition-all duration-200 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom flex items-center justify-between py-4">
        <Link href="/" className="font-bold text-xl no-underline">
          稲田裕次郎
        </Link>
        
        {/* デスクトップナビゲーション */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`no-underline ${
                pathname === item.href
                  ? 'font-semibold text-blue-500 dark:text-blue-400'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <ThemeSwitch />
        </nav>
        
        {/* モバイルメニューボタン */}
        <div className="md:hidden flex items-center">
          <ThemeSwitch />
          <button
            type="button"
            className="ml-4 text-gray-600 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="container-custom py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block py-2 ${
                  pathname === item.href
                    ? 'font-semibold text-primary-light dark:text-primary-dark'
                    : 'text-gray-600 dark:text-gray-300'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header