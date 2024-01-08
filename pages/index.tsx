import React, {useState} from 'react';
import { Inter } from 'next/font/google'
import { getServerSideProps } from './api/backend_system';
import Datacall from './api/Datacall';
import Navbar from './components/navbar';

const inter = Inter({ subsets: ['latin'] })

interface HomeProps {
  sheetdata: string,
}

export { getServerSideProps }; // Export for Next.js to recognize

export default function Home({sheetdata}: HomeProps) {
  const dataArray = Datacall({range: "Sheet1!A:A"});
  var dataEntries:string[] = (dataArray as string[][]).flatMap(innerArray => innerArray);
  console.log(dataEntries, dataEntries.length);

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <h1>{dataEntries[0]}</h1>
      <Navbar/>
      <div>
        <p>{dataEntries[1]}</p>
      </div>
    </main>
  )
}