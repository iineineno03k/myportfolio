'use client'

import { useState, useEffect } from 'react'

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)

  // DOMのクラス状態をチェックする関数
  const checkDarkMode = () => {
    return document.documentElement.classList.contains('dark');
  };

  // useEffectでマウント時にダークモード状態を同期
  useEffect(() => {
    setMounted(true);
    setIsDarkMode(checkDarkMode());
  }, []);

  const toggleTheme = () => {
    try {
      const newDarkModeState = !isDarkMode;
      
      if (newDarkModeState) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      try {
        localStorage.setItem('theme', newDarkModeState ? 'dark' : 'light');
      } catch (e) {
        console.error('LocalStorage save error:', e);
      }
      
      setIsDarkMode(newDarkModeState);
    } catch (e) {
      console.error('Theme toggle error:', e);
    }
  };

  // Hydration対策：コンポーネントがマウントされるまで何も表示しない
  if (!mounted) {
    return <div className="w-5 h-5" />;  // スペースホルダーを返してレイアウトシフトを防ぐ
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-secondary hover:bg-secondary transition-colors"
      aria-label={isDarkMode ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
      type="button"
    >
      {isDarkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeSwitch