'use client'
import { docFilterByAuthor, docFilterByCategory, docFilterByTag } from "@/lib/docFilter";
import groupBy from "@/lib/groupBy";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Sidebar({ docs, showDropdown }) {
    const pathName = usePathname();
    const [rootNodes, setRootNodes] = useState([]);
    const [nonRootNodesGrouped, setNonRootNodesGrouped] = useState({});

    useEffect(() => {
        let matchedDocs = docs;

        if (pathName.includes('/tags')) {
            const tag = pathName.split("/")[2];
            matchedDocs = docFilterByTag(docs, tag);

        } else if (pathName.includes('/authors')) {
            const author = pathName.split("/")[2];
            matchedDocs = docFilterByAuthor(docs, author);

        } else if (pathName.includes('/categories')) {
            const category = pathName.split("/")[2];
            matchedDocs = docFilterByCategory(docs, category);

        }

        const roots = matchedDocs.filter(doc => !doc.parent);
        const nonRoots = groupBy(
            matchedDocs.filter((doc) => doc.parent), ({ parent }) => parent
        );

        const nonRootsKeys = Reflect.ownKeys(nonRoots);
        nonRootsKeys.forEach(key => {
            const foundInRoots = roots.find((root) => root.id === key);
            if (!foundInRoots) {
                const foundInDocs = docs.find((doc) => doc.id === key);
                roots.push(foundInDocs);
            }
        });

        roots.sort((a, b) => {
            if (a.order < b.order) {
                return -1;
            }
            if (a.order > b.order) {
                return 1;
            }
            return 0;
        });

        setRootNodes([...roots]);
        setNonRootNodesGrouped({ ...nonRoots });

    }, [pathName, docs])

    const isActive = (href) => pathName === href;

    return (
        <nav className={`${showDropdown ? "" : "hidden"} lg:block my-10`}>
            {/* <Logo /> */}
            <ul className={`${showDropdown ? "fixed z-50 bg-slate-50 pr-8 pl-2 py-4 max-w-full rounded-lg shadow-lg" : ""}`}>
                <div className="relative mt-3 pl-2">
                    <div className="absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5"></div>
                    <div className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"></div>
                    <ul role="list" className="border-l border-transparent">
                        {rootNodes.map((rootNode) => (
                            <li key={rootNode.id} className="relative">
                                {isActive(`/docs/${rootNode.id}`) && (
                                    <div className="absolute left-0 h-6 w-px bg-emerald-500"></div>
                                )}
                                <Link
                                    aria-current="page"
                                    className={`flex justify-between gap-2 py-1 pl-4 pr-3 text-sm transition ${isActive(`/docs/${rootNode.id}`) ? 'text-emerald-500 font-bold' : 'text-zinc-900 dark:text-white'}`}
                                    href={`/docs/${rootNode.id}`}
                                >
                                    <span className="truncate">
                                        {rootNode.title}
                                    </span>
                                </Link>
                                {nonRootNodesGrouped[rootNode.id] && (
                                    <ul
                                        role="list"
                                        className="border-l border-transparent"
                                    >
                                        {nonRootNodesGrouped[rootNode.id].map(
                                            (subRoot) => (
                                                <li key={subRoot.id} className="relative">
                                                    {isActive(`/docs/${rootNode.id}/${subRoot.id}`) && (
                                                        <div className="absolute left-0 h-6 w-px bg-emerald-500"></div>
                                                    )}
                                                    <Link
                                                        className={`flex justify-between gap-2 py-1 pl-7 pr-3 text-sm transition ${isActive(`/docs/${rootNode.id}/${subRoot.id}`) ? 'text-emerald-500 font-bold' : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'}`}
                                                        href={`/docs/${rootNode.id}/${subRoot.id}`}
                                                    >
                                                        <span className="truncate">
                                                            {subRoot.title}
                                                        </span>
                                                    </Link>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </ul>
        </nav>
    );
};
