import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";
import Feedback from "./Feedback";
import { Toaster } from "sonner";

const ContentDisplay = async ({ docId }) => {
    const documentContent = await getDocumentContent(docId);

    return (
        <div className="px-4 md:px-8 lg:px-16">
            <article className="prose dark:prose-invert mb-8 lg:mb-24">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{documentContent.title}</h1>

                <div className="text-sm md:text-base mt-2">
                    {documentContent.date && <span>{`Published on ${documentContent.date} by `}</span>}
                    {documentContent.author && (
                        <>
                            <Link href={`/authors/${documentContent.author}`} className="text-blue-600 hover:underline">
                                {`${documentContent.author} `}
                            </Link>{" "}
                            <span>under the </span>
                        </>
                    )}
                    {documentContent.category && (
                        <>
                            <Link href={`/categories/${documentContent.category}`} className="text-blue-600 hover:underline">
                                {`${documentContent.category} `}
                            </Link>
                            <span>category.</span>
                        </>
                    )}
                </div>

                <div className="mt-4">
                    {documentContent.tags &&
                        documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)}
                </div>

                <div
                    className="lead mt-4"
                    dangerouslySetInnerHTML={{ __html: documentContent.contentHTML }}
                />
            </article>

            {/* Feedback from users */}
            <Feedback />
            <Toaster />
        </div>
    );
};

export default ContentDisplay;
