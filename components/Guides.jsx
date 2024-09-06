'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Guides = () => {
    const pathName = usePathname();
    if (pathName !== "/") {
        return (
            <div className="my-16 px-4 sm:px-6 lg:px-8 xl:max-w-none">
                <h2 id="guides" className="scroll-mt-24">
                    <Link
                        className="group text-inherit no-underline hover:text-inherit font-semibold"
                        href="#guides"
                    >
                        <div
                            className="absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]"
                        >
                            <div
                                className="group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600"
                            >
                                <Image
                                    width={25}
                                    height={25}
                                    src="/rightArrow.svg"
                                    alt="" />
                            </div>
                        </div>
                        Guides
                    </Link>
                </h2>
                <div
                    className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-4"
                >
                    <div>
                        <h3
                            className="text-sm font-semibold text-zinc-900 dark:text-white"
                        >
                            Introduction
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            Discover our comprehensive documentation and tutorials to kickstart your learning journey.
                        </p>
                        <p className="mt-4">
                            <Link className="readMore flex items-center " href="/docs/introduction">
                                <span>Read more</span>
                                <Image
                                    width={25}
                                    height={25}
                                    alt="icon"
                                    src="/rightArrow.svg"
                                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                                />
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h3
                            className="text-sm font-semibold text-zinc-900 dark:text-white"
                        >
                            Frontend Resources
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            Explore curated web development tools, tutorials, and guides for all levels.
                        </p>
                        <p className="mt-4">
                            <Link className="readMore flex items-center" href="/docs/frontend-resources">
                                <span>Read more</span>
                                <Image
                                    width={25}
                                    height={25}

                                    alt="icon"
                                    src="/rightArrow.svg"
                                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                                />
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h3
                            className="text-sm font-semibold text-zinc-900 dark:text-white"
                        >
                            Git Commands
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            Learn essential Git commands with practical examples to streamline version control.
                        </p>
                        <p className="mt-4">
                            <Link className="readMore flex items-center" href="/docs/git-commands">
                                <span>Read more</span>
                                <Image
                                    width={25}
                                    height={25}

                                    alt="icon"
                                    src="/rightArrow.svg"
                                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                                />
                            </Link>
                        </p>
                    </div>
                    <div>
                        <h3
                            className="text-sm font-semibold text-zinc-900 dark:text-white"
                        >
                            Contribution Guidelines
                        </h3>
                        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                            Follow our guidelines to ensure valuable, consistent, and aligned contributions.
                        </p>
                        <p className="mt-4">
                            <Link className="readMore flex items-center" href="/docs/contribution-guidelines">
                                <span>Read more</span>
                                <Image
                                    width={25}
                                    height={25}

                                    alt="icon"
                                    src="/rightArrow.svg"
                                    className="relative top-px -mr-1 mt-0.5 h-5 w-5"
                                />
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

};

export default Guides;