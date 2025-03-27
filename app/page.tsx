import Hero from '@/components/Hero'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

export default function Home() {
  // フィーチャープロジェクト
  const featuredProjects = [
    {
      title: 'ハッカソンプロジェクト: 食材管理アプリ',
      description: '48時間のハッカソンで開発した、冷蔵庫内の食材を管理し賞味期限が近づくとレシピを提案するアプリ。チームでフロントエンド部分を担当し、優秀賞を受賞。',
      technologies: ['React', 'TypeScript', 'Firebase'],
    },
    {
      title: 'ポートフォリオサイト（本サイト）',
      description: 'Next.jsとTailwind CSSを使用した個人ポートフォリオサイト。レスポンシブデザインとダークモード対応を実装。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    }
  ]

  return (
    <>
      <Hero />
      
      <section className="section bg-gray-50 dark:bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">注目のプロジェクト</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              これまでに手がけた主要なプロジェクトの一部です
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projects" className="btn-primary">
              すべてのプロジェクトを見る
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">スキルと専門分野</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">
              システム設計とエンジニアリングにおける主な得意分野
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="mb-4 text-blue-500 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">システム設計</h3>
              <p className="text-gray-600 dark:text-gray-300">
                構造化思考と多角的視点を活かし、保守性と拡張性に優れたシステム設計を行います。
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mb-4 text-primary-light dark:text-primary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">フルスタック開発</h3>
              <p className="text-gray-600 dark:text-gray-300">
                JavaとReactを中心に、バックエンドからフロントエンドまで一貫した開発が可能です。
              </p>
            </div>
            
            <div className="card text-center">
              <div className="mb-4 text-primary-light dark:text-primary-dark">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">チームリード</h3>
              <p className="text-gray-600 dark:text-gray-300">
                共通認識の構築と方向性の提示を通じて、チームの生産性向上とプロジェクト成功に貢献します。
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}