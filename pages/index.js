import Contact from '@/components/Contact'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import { Projects } from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'


export default function Home() {
  return (
    <>
    <Head>
      <title>Iza Markström</title>
      <meta name="keywords" content="portfolio" charSet="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Navbar/>
    </main>
    </>
  )
}
