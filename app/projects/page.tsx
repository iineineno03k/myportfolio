import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'ハッカソンプロジェクト: 食材管理アプリ',
      description: '48時間のハッカソンで開発した、冷蔵庫内の食材を管理し、賞味期限が近づくとレシピを提案するアプリ。チームでフロントエンド開発とデータ連携部分を担当し、優秀賞を受賞。',
      technologies: ['React', 'TypeScript', 'Firebase'],
      demoLink: undefined,
      codeLink: undefined,
    },
    {
      title: 'ハッカソンプロジェクト: 健康記録ダッシュボード',
      description: '健康データを可視化するダッシュボードアプリ。APIからデータを取得し、グラフ化して表示する機能を実装。ユーザーが自分の健康状態を理解しやすいUIを設計。',
      technologies: ['React', 'Chart.js', 'Node.js'],
      demoLink: undefined,
      codeLink: undefined,
    },
    {
      title: 'ポートフォリオサイト（本サイト）',
      description: 'Next.jsとTailwind CSSを使用した個人ポートフォリオサイト。レスポンシブデザインとダークモード対応を実装。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      demoLink: undefined,
      codeLink: 'https://github.com/yourusername/portfolio',
    },
  ]

  return (
    <div className="pt-20">
      <section className="section bg-slate-50 dark:bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">プロジェクト</h1>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              これまでに手がけたハッカソンプロジェクトや個人開発作品を紹介します。
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 inline-block">
              <h2 className="text-xl font-bold mb-2">今後の取り組み</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                AI技術を活用した個人開発プロジェクトを計画中です。<br />
                継続的な学習と共に、実用的かつクリエイティブな作品を制作していきます。
              </p>
              <p className="text-blue-500 dark:text-blue-400 font-semibold">
                Coming Soon...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}