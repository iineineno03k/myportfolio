import ProjectCard from '@/components/ProjectCard'

export default function Projects() {
  const projects = [
    {
      title: 'ポコポコ　おとあわせ',
      description: '音版神経衰弱。すっごくたのしいスマホアプリ',
      technologies: ['ReactNative', 'TypeScript', 'RevenueCat'],
      demoLink: 'https://apps.apple.com/jp/app/%E3%83%9D%E3%82%B3%E3%83%9D%E3%82%B3-%E3%81%8A%E3%81%A8%E3%81%82%E3%82%8F%E3%81%9B/id6744270269',
      codeLink: undefined,
      imageSrc: '/images/pokopoko.png'
    },
    {
      title: 'ポートフォリオサイト（本サイト）',
      description: 'Next.jsとTailwind CSSを使用した個人サイト。レスポンシブデザインとダークモード対応を実装。',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      demoLink: 'https://myportfolio-sage-mu.vercel.app/',
      codeLink: 'https://github.com/iineineno03k/myportfolio',
      imageSrc: '/images/ine.jpeg'
    },
    {
      title: 'パコリスト',
      description: '大人の行為を記録したり、大人の行為をした相手を記録するスマホアプリ',
      technologies: ['ReactNative', 'TypeScript', 'Go', 'Gin', 'GORM'],
      demoLink: 'https://apps.apple.com/jp/app/%E3%83%91%E3%82%B3%E3%83%AA%E3%82%B9%E3%83%88/id6743646567',
      codeLink: undefined,
      imageSrc: '/images/PACOLIST_icon.png'
    },
    {
      title: 'オレ技メーカー',
      description: '自分だけの必殺技を作り、友達と必殺技のセンスを競うアプリ。LINEのミニアプリ（コードは複数ある中の一つ）',
      technologies: ['React', 'TypeScript', 'Material-UI', 'Java', 'Spring Boot', 'PostgreSQL'],
      demoLink: 'https://protopedia.net/prototype/4938',
      codeLink: 'https://github.com/iineineno03k/original-special-move-localbattle',
      imageSrc: '/images/specialmove.png'
    },
  ]

  return (
    <div className="pt-20">
      <section className="section-alt">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">ポートフォリオ</h1>
            <p className="text-secondary max-w-2xl mx-auto">
              これまでに手がけたハッカソンや個人開発作品を紹介します。
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
                imageSrc={project.imageSrc}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="card inline-block">
              <h2 className="text-xl font-bold mb-2">今後の取り組み</h2>
              <p className="text-secondary mb-4">
                AI技術を活用した個人開発ポートフォリオを計画中です。<br />
                継続的な学習と共に、実用的かつクリエイティブな作品を制作していきます。
              </p>
              <p className="text-accent font-semibold">
                Coming Soon...
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}