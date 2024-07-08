"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';

export default function Navbar() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
      <div className="absolute w-full bg-white bg-opacity-90 z-20 flex justify-between items-center py-8 px-8 border-b">
        <section>
            <Link className='text-4xl font-extrabold font-serif hover:text-blue-400' href="/">SDS</Link>
        </section>
        <section className="text-lg">
            <Link href="/" className="mr-8 hover:text-blue-400">{isClient && <FolderOpenIcon className='mb-1' sx={{ fontSize: 30 }} />} Portfolio</Link>
            <Link href="/contact" className="mr-8 hover:text-blue-400">{isClient && <PhoneIphoneIcon className='mb-1' sx={{ fontSize: 30 }} />} Contact</Link>
            <Link href="/resume" className=" hover:text-blue-400">{isClient && <ContentPasteSearchIcon className='mb-1' sx={{ fontSize: 30 }} />} Resume</Link>
        </section>
      </div>
    );
}