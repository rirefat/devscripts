import { getDocumentContent } from "@/lib/doc";
import Link from "next/link";
import Tag from "./Tag";
import Feedback from "./Feedback";
import { Toaster } from "sonner";


const ContentDisplay = async ({ docId }) => {
    const documentContent = await getDocumentContent(docId);

    return (
        <div className="">
            <article class="prose dark:prose-invert mb-24">
                <h1>{documentContent.title}</h1>

                <div>
                    {
                        documentContent.date && <span>{`Published on ${documentContent.date} by `}</span>
                    }
                    {
                        documentContent.author && <><Link href={`/authors/${documentContent.author}`}>{`${documentContent.author} `}</Link> <span>under the </span></>
                    }
                    {
                        documentContent.category && <><Link href={`/categories/${documentContent.category}`}>{`${documentContent.category} `}</Link><span>category.</span></>
                    }
                </div>

                <div>
                    {
                        documentContent.tags &&
                        documentContent.tags.map((tag) => <Tag key={tag} tag={tag} />)
                    }
                </div>

                <div
                    className="lead"
                    dangerouslySetInnerHTML={{ __html: documentContent.contentHTML }} />

            </article>

            {/* Feedback from users */}
            <Feedback />
            <Toaster />
        </div>

    );
};

export default ContentDisplay;