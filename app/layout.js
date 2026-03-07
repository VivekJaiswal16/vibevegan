import '../styles/globals.css'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata = {
  title: 'VibeVegan — For the Planet, For Life',
  description: 'A movement for the ones who give a damn. Go vegan for the animals, the planet, and yourself.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <ScrollReveal />
      </body>
    </html>
  )
}