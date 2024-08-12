import Link from "next/link";


const SearchResult = ({ results, term, closeSearchResult }) => {

    return (
        <div
            className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow"
        >
            <p className="text-sm font-light">
                Showing results for
                <span className="font-semibold px-2 text-green-950">keyword :</span>
                {term}
            </p>
            <ul role="list" className="divide-y divide-gray-100 [&>*]:py-2">
                {
                    results.map((result) => (
                        <li key={result.id}>
                            <Link
                                className="transition-all hover:text-emerald-600"
                                href={`/docs/${result.id}`}
                                onClick={(e) => closeSearchResult(e)}
                            >
                                {result.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default SearchResult;