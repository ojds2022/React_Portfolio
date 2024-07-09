import Link from "next/link";
import '../styles/projects.module.css';

export default function Projects() {
    return (
      <div className="bg-white py-10 bg-opacity-85 rounded-2xl">
        <section className="m-auto flex flex-wrap justify-center items-center">
            <Link href="https://berkeley-bootcamp-tech-blog-000f1a91a27f.herokuapp.com/" target="_blank" id="techBlog" className="flex justify-center items-center w-56 h-32 m-5 p-5 font-bold text-lg rounded-xl bg-indigo-500">Tech Blog</Link>
            <Link href="https://ojds2022.github.io/weather_dashboard/" target="_blank" id="skyWatcher" className="flex justify-center items-center w-56 h-32 m-5 p-5 text-white font-bold text-lg rounded-xl">SkyWatcher</Link>
            <Link href="https://agile-anchorage-91815-86c9ccb72548.herokuapp.com/products" target="_blank" id="goatECommerce" className="flex justify-center items-center w-56 h-32 m-5 p-5 font-bold text-lg rounded-xl bg-indigo-500">Goat E-Commerce</Link>
            <Link href="https://ojds2022.github.io/coding_quiz/" target="_blank" id="codingQuiz" className="flex justify-center items-center w-56 h-32 m-5 p-5 font-bold text-lg rounded-xl bg-indigo-500">Coding Quiz</Link>
            <Link href="https://master--iridescent-basbousa-495226.netlify.app" target="_blank" id="happyPlate" className="flex justify-center items-center w-56 h-32 m-5 p-5 font-bold text-lg rounded-xl bg-indigo-500">HappyPlate</Link>
            <Link href="https://main--glowing-semifreddo-d3c7e8.netlify.app" target="_blank" id="cafeDuCoast" className="flex justify-center items-center w-56 h-32 m-5 p-5 font-bold text-lg rounded-xl bg-indigo-500">Cafe du Coast</Link>
        </section>
      </div>
    );
}