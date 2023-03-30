import Contact from '@/components/Contact'
import { Box } from '@chakra-ui/react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import { Projects } from '@/components/Projects'
import Skills from '@/components/Skills'
import Head from 'next/head'

// exportera alla komponenter på samma sätt


export default function Home() {
  return (
    <>
    <Head>
      <title>Iza Markström</title>
      <meta name="keywords" content="portfolio" charSet="UTF-8"/>
      <link rel="icon" href="/favicon.ico" />
    </Head>

      <Navbar/>

      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>

    </>
  )
}
