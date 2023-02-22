import { Header } from '@/components/header'
import './globals.css'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <meta
        name="viewport"
        content="width=device-width, height=device-height initial-scale=1"/>
      <head />
      <body>
        <div>
          <Header />
          <main className='pt-[var(--navigation-height)]'>
            {children}
          </main>
          <Footer/>
        </div>

      </body>
    </html>
  )
}
