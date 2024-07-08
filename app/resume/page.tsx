"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

export default function Resume() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="p-20 mx-52">
            <section className="text-center my-20">
                <a href={'/assets/images/Saim_Diaz_Resume.pdf'} className="text-6xl font-bold hover:text-blue-400" download>
                    Resume {isClient && <PictureAsPdfIcon sx={{ fontSize: 50 }} />}
                </a>
                <p>Click to download a pdf of my resume</p>
            </section>
            <section className="text-center mb-20">
                <h2 className="text-4xl font-bold mb-5">Motivated and Passionate</h2>
                <p className='text-lg'>
                    With a passion for developing high-quality, visually-pleasing, user-friendly platforms,
                    I am eager to leave a lasting mark on the tech industry. As a software engineer, I am motivated 
                    by the challenge of solving complex problems that will enable my company and team to continue 
                    its progression and high-levels of success.
                </p>
            </section>
            <section className="text-center">
                <h2 className="text-4xl font-bold mb-5">Experienced</h2>
                <p className='text-lg'>
                    Having nearly 3 years of experience in full stack software engineering, I bring a high-level of 
                    professionalism, a wide range of capabilities, and proven success working in real-world situations.
                    I have experince working in startup environments, as well as coroprate settings. My specialties include 
                    JavaScript, TypeScript, HTML/CSS, React, Node, SQL, Sequelize, and MongoDB.
                </p>
                <div className='flex flex-wrap justify-center mt-10'>
                    <Image className='shrink-0 m-2' src="/assets/images/Javascript.png" alt="JavaScript logo" width={'180'} height={'160'} />
                    <Image className='shrink-0 m-2' src="/assets/images/Typescript.png" alt="TypeScript logo" width={'180'} height={'160'} />
                    <Image className='shrink-0 m-2' src="/assets/images/React.png" alt="React logo" width={'180'} height={'160'} />
                    <Image className='shrink-0 m-2' src="/assets/images/node.png" alt="Node logo" width={'180'} height={'160'} />
                </div>
            </section>
        </div>
    );
}