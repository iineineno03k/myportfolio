import Timeline from '@/components/Timeline'

export default function About() {
  const timelineItems = [
    { 
      year: '2018年3月', 
      title: '慶應義塾志木高校卒業', 
      description: '高校時代は文系クラスに所属。この頃はまだITやプログラミングには触れていませんでした。' 
    },
    { 
      year: '2018年4月~2022年3月', 
      title: '慶應義塾大学 法学部政治学科卒業', 
      description: '大学では法学と政治学を学び、論理的思考力と多角的な視点を養いました。' 
    },
    { 
      year: '2022年4月~2024年6月', 
      title: 'スミセイ情報システム入社（SIer）', 
      description: '「受かりやすい」という理由でSIerに入社。しかし研修でプログラミングの面白さに目覚め、エンジニアとしてのキャリアをスタートしました。生命保険のシステムの設計などを担当。' 
    },
    { 
      year: '2024年7月〜現在', 
      title: 'リクルート オフショアソリューション部', 
      description: '現在はリクルートでシステム設計とリードの役割を担っています。多くの人に貢献できる立場を目指して日々スキルを磨いています。' 
    },
  ]

  return (
    <div className="pt-20">
      <section className="section bg-gray-50 dark:bg-slate-900">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">自己紹介</h1>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 sticky top-24">
                <div className="mb-6 flex justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-400 dark:from-blue-600 dark:to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-4xl font-bold">稲</span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold mb-2 text-center">稲田裕次郎</h2>
                <p className="text-gray-600 dark:text-gray-300 text-center mb-4">エンジニア / システム設計</p>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mb-4">
                  <h3 className="font-semibold mb-2">基本情報</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start">
                      <span className="font-medium mr-2">学歴:</span>
                      <span>慶應義塾大学 法学部政治学科</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-medium mr-2">職業:</span>
                      <span>エンジニア (リクルート)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h3 className="font-semibold mb-2">得意分野</h3>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>システム設計</li>
                    <li>Java / Spring Boot</li>
                    <li>React</li>
                    <li>デザインパターン</li>
                    <li>CI/CD</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2">
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">プロフィール</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  法学部出身ながら、未経験から始めたエンジニアとして急速に成長。構造化思考と多角的視点を活かし、システム設計と開発を行っています。
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  これまでSIerでの経験を通じて、複雑なシステムの設計と実装を経験。生命保険システムの諾否決定設計や、DB構造の理解、関係部署との連携によるプロジェクト推進など、実践的なスキルを蓄積してきました。
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  現在はリクルートでのキャリアを通じて、より多くの人に貢献できるエンジニアを目指しています。将来的にはシステム全体の意思決定ができる存在になりたいという目標を持ち、日々スキルアップに励んでいます。
                </p>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">強みと特徴</h2>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">思考の特性</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    <li><span className="font-medium">直感重視の分析力:</span> 最初の違和感や直感を大切にし、それを掘り下げて分析・言語化するアプローチ</li>
                    <li><span className="font-medium">構造化思考:</span> 複雑な情報を図や構造で整理する能力が高い</li>
                    <li><span className="font-medium">多角的視点:</span> 物事を様々な側面から見て分析する力がある</li>
                    <li><span className="font-medium">全体俯瞰型:</span> 課題に取り組む前に全体像を把握することを重視</li>
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">技術的志向</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    <li><span className="font-medium">設計志向:</span> システム設計を得意とし、共通認識を作り上げるリード的役割を好む</li>
                    <li><span className="font-medium">パターン活用:</span> GoFデザインパターン（特にFactory MethodやStrategy）を実践的に活用</li>
                    <li><span className="font-medium">理論と実践のバランス:</span> ドキュメント学習を基礎としつつ、実践の重要性も認識</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">チームでの立ち位置</h3>
                  <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                    <li><span className="font-medium">他者理解の深さ:</span> コミット履歴やドキュメント、発言から相手の特性を分析</li>
                    <li><span className="font-medium">努力の過程を重視:</span> 結果だけでなく、その人がどう努力してきたかを理解</li>
                    <li><span className="font-medium">リード志向:</span> システム全体の方向性を示す立場を好む</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md p-6">
                <h2 className="text-2xl font-bold mb-4">経歴</h2>
                <Timeline items={[...timelineItems].reverse()} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}