import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { Container } from '@/components/container'
import { Hero, HeroSubtitle, HeroTitle } from '@/components/hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <main>
        <Container>
          <Hero>
            <HeroTitle>Linear is a better way <br />
              to build products</HeroTitle>
            <HeroSubtitle>Meet the new standard for modern software development.<br />
              Streamline issues, sprints, and product roadmaps.</HeroSubtitle>
            <img src='/img/hero.webp' alt="Hero image" />
          </Hero>
        </Container>
      </main>

    </div>
  )
}
