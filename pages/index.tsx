import { Inter } from 'next/font/google'
import { getServerSideProps } from './api/backend_system';
import Datacall from './api/Datacall';

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  sheetdata: string,
}

export { getServerSideProps }; // Export for Next.js to recognize

export default function Home({sheetdata}: HomeProps) {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>
        <Datacall range ='Sheet1!A2'/>
        <Datacall range ='Sheet1!B2'/>
      </div>
    </main>
  )
}