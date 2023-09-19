import { MenuTop } from '../components/MenuTop'
import { Hero } from '../components/Hero'
import { EVA } from '../components/EVA'
import { Report } from '../components/Reports'
import Head from 'next/head'
import { Html } from 'next/document'

export default function Home() {
  return (
    <>
      <header>
        <MenuTop></MenuTop>
      </header>
      <main>
        <Hero></Hero>
        <EVA></EVA>
        <Report></Report>
      </main>
    </>
  )
}
