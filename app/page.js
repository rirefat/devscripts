/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <article className="px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="relative mx-auto max-w-screen-xl">
          <div className="mx-auto grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-5 lg:gap-y-8">
            <div className="flex flex-col justify-center lg:pb-6 lg:col-span-2">
              <h1 className="mt-4 text-4xl font-extrabold leading-none tracking-tight text-slate-900 sm:text-5xl sm:leading-[3.5rem] lg:text-6xl lg:leading-none">
                DevScripts
              </h1>

              <p className="mt-6 text-sm leading-6 text-slate-700 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
                Unlock a wealth of expertise with our meticulously crafted programming contents and comprehensive web development documentation. From cutting-edge front-end frameworks to robust back-end systems, we equip you with the essential tools to create efficient, scalable, and modern web applications.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 sm:mt-10">
                <Link href="/docs/introduction" className="inline-flex justify-center rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white hover:bg-slate-700">
                  <span>Get Started</span>
                </Link>
              </div>
            </div>
            <div className="relative lg:col-span-3 flex justify-center lg:justify-end">
              <Image
                src="/banner.png"
                alt="Banner"
                width={1600}
                height={1280}
                className="relative z-20 aspect-[853/682] w-full max-w-full sm:max-w-[480px] md:max-w-[600px] lg:max-w-[630px] rounded-xl bg-slate-200 shadow-xl shadow-black/5 ring-1 ring-slate-900/5"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
