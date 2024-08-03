import { getDocuments } from "@/lib/doc";
import Link from "next/link";

export default function Sidebar() {
    const allDocuments = getDocuments();

    const roots = allDocuments.filter(doc => !doc.parent);
    console.log(roots)
    const nonRoots = Object.groupBy(
        allDocuments.filter((doc) => doc.parent), (parent) => parent
    )

    return (
        <nav className="hidden lg:mt-10 lg:block">
            <ul role="list" className="border-l border-transparent">
                {
                    roots.map(rootNode => (
                        <li className="relative" key={rootNode.id}>
                            <Link
                                href={`/docs/${rootNode.id}`}
                                aria-current="page"
                                className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
                            >
                                <span className="truncate">{rootNode.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}