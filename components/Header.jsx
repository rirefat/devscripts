'use client'
import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./Sidebar";
import { FaGithub } from "react-icons/fa6";
import { MdSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";
import Image from "next/image";
import ResponsiveSearch from "./ResponsiveSearch";
import { useState } from "react";

export default function Header({ docs }) {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleDropdown = () => {
        setShowDropdown((state) => !state);
    }

    return (
        <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
            {/* logo part*/}
            <Logo />
            {/* logo part end*/}

            {/* Header section */}
            <div
                className="fixed inset-x-0 top-0 z-50 bg-white bg-white/[var(--bg-opacity-light)] px-4 backdrop-blur-sm transition dark:bg-[#17181C] dark:backdrop-blur sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80"
                style={{ "--bg-opacity-light": 0.5, "--bg-opacity-dark": 0.2 }}>
                <div className="container flex h-14 items-center justify-between gap-12">
                    <div className="absolute inset-x-0 top-full h-px bg-zinc-900/7.5 transition dark:bg-white/7.5"></div>
                    <Search docs={docs} />

                    {/* Responsive header starts */}
                    <div className="flex items-center gap-5 lg:hidden">
                        <button type="button"
                            className="flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5"
                            aria-label="Toggle navigation">
                            <Image onClick={handleDropdown} src={`${showDropdown ? '/close.svg' : '/hamburger.svg'}`} height={50} width={50} alt="Menu" className={`${showDropdown ? 'w-20' : 'w-4'}  stroke-zinc-900 dark:stroke-white`} />
                        </button>
                        <ResponsiveSearch docs={docs} />
                    </div>
                    {/* Responsive header ends */}

                    <span className="flex gap-4">
                        <span className="cursor-pointer">
                            <MdSunny  size={'1.8em'} />
                            <IoMdMoon  size={'1.8em'} />
                        </span>
                        <Link href={'https://github.com/rirefat/devscripts'} target="_blank">
                            <FaGithub size={'1.8em'} />
                        </Link>
                    </span>
                </div>
            </div>
            {/* Header section ends here */}

            {/* Sidebar Section */}
            <Sidebar docs={docs} showDropdown={showDropdown} setShowDropdown={setShowDropdown} />
            {/* Sidebar Section Ends */}
        </header>
    );
}
