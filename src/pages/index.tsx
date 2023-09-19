import { Layout } from '../components/Layout'
import { Hero } from '../components/Hero'
import { EVA } from '../components/EVA'
import { Report } from '../components/Reports'
import { MetaHead } from '../components/Layout/SEO'

export default function Home() {
  return (
    <>
      <MetaHead title="Melhores ações para investir na Bolsa" />
      <Layout>
        <main>
          <Hero />
          <EVA />
          <Report />
        </main>
      </Layout>
    </>
  )
}
