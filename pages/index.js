import Contact from '@/components/Contact'
import { Box } from '@chakra-ui/react'
import About from '../components/About'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import theme from '@/components/Chakra_theme'
import { Projects } from '@/components/Projects'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Box pt='85px' bg={theme.colors.background}>
      <Main/>
      <About/>
      <Projects/>
      <Contact/>
    </Box>
    </>
  )
}
