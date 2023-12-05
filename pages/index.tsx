import { Inter } from 'next/font/google'
import { GetServerSideProps } from 'next';
import { getServerSideProps } from './api/backend_system';

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  sheetdata: string,
}

export { getServerSideProps }; // Export for Next.js to recognize

export default function Home({sheetdata}: HomeProps) {

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div className='testDiv'>
        {sheetdata}
      </div>
    </main>
  )
}