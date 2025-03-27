import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '稲田裕次郎のポートフォリオ',
  description: 'エンジニア稲田裕次郎のポートフォリオサイトです。自己紹介、制作物、ブログを掲載しています。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            try {
              (function() {
                if (typeof window !== 'undefined') {
                  let savedTheme;
                  try {
                    savedTheme = localStorage.getItem('theme');
                  } catch (e) {
                    console.error('LocalStorage access error:', e);
                  }
                  
                  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                }
              })();
            } catch (e) {
              console.error('Theme initialization error:', e);
            }
          `
        }} />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}