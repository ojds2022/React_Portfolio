"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Contact() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

    return (
      <div className="h-screen text-center pt-20">
        <h1 className="mx-8 mt-20 mb-5 text-4xl font-bold">Contact</h1>
        <section className="flex flex-col justify-center items-center h-2/3 w-1/2 m-auto text-slate-600 text-xl">
          <div className="flex justify-between border-y-2 border-x-2 border-slate-400 w-full py-10 px-20 bg-slate-200">
            <span className="font-bold">PHONE</span> <span>(505) 948-0761</span>
          </div>
          <div className="flex justify-between border-b-2 border-x-2 border-slate-400 w-full py-10 px-20 bg-slate-200">
            <span className="font-bold">EMAIL</span> <Link className='hover:text-blue-400' href={'mailto:odiazstrandberg@gmail.com'}>odiazstrandberg@gmail.com</Link>
          </div>
          <div className="flex justify-between border-b-2 border-x-2 border-slate-400 w-full py-10 px-20 bg-slate-200">
            <span className="font-bold">SOCIAL</span> 
            <Link className='hover:text-blue-400' target='_blank' href={'http://www.linkedin.com/in/saim-diaz-strandberg-39a0881b1'}>{isClient && <LinkedInIcon sx={{ fontSize: 50 }} />}</Link> 
            <Link className='hover:text-blue-400' target='_blank' href={'https://github.com/ojds2022'}>{isClient && <GitHubIcon sx={{ fontSize: 50 }} />}</Link>
          </div>
        </section>
        <Link className='hover:text-blue-400' href={'/'}>Back to Portfolio</Link>
      </div>
    );
}
  