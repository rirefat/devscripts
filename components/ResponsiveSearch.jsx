'use client'
import { useDebounce } from "@/hooks/useDebounce";
import Image from "next/image";
import { useState } from "react";
import SearchResult from "./SearchResult";
import { useRouter } from "next/navigation";
import EmptyCard from "./EmptyCard";

export default function ResponsiveSearch({ docs }) {
    const [searchResult, setSearchResult] = useState([]);
    const [term, setTerm] = useState("");
    const router = useRouter();

    const handleChange = (event) => {
        const value = event.target.value;
        setTerm(value);
        doSearch(value);
    }

    const doSearch = useDebounce((term) => {
        const found = docs.filter((doc) => {
            return doc.title.toLowerCase().includes(term.toLowerCase());
        })
        setSearchResult(found);
        console.log(found);
    }, 500);

    const closeSearchResult = (event) => {
        event.preventDefault();
        setTerm("");
        router.push(event.target.href)
    }

    return (
        <div className="relative max-w-md flex-auto">
            <button
                type="button"
                className="focus:[&amp;:not(:focus-visible)]:outline-none h-8 w-full items-center gap-2 rounded-full bg-white pl-2 pr-3 text-sm text-zinc-500 ring-1 ring-zinc-900/10 transition hover:ring-zinc-900/20 dark:bg-white/5 dark:text-zinc-400 dark:ring-inset dark:ring-white/10 dark:hover:ring-white/20 flex"
            >
                <Image
                    src="/search.svg"
                    alt="Search"
                    className="h-5 w-5"
                    width={50}
                    height={50}
                />
                <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 focus:border-none focus:outline-none"
                    value={term}
                    onChange={handleChange}
                />
                <kbd className="ml-auto w-auto text-2xs text-zinc-400 dark:text-zinc-500">
                    {term && term.trim().length > 0 && (
                        <kbd
                            onClick={() => setTerm("")}
                            className="font-sans">Clear Search
                        </kbd>
                    )}
                </kbd >
            </button>


            {/* Search Result card */}
            {term && term.trim().length > 0 && (
                searchResult.length > 0 ?
                    <SearchResult
                        results={searchResult}
                        term={term}
                        closeSearchResult={closeSearchResult}
                    /> : <EmptyCard />
            )}
        </div>
    );
}