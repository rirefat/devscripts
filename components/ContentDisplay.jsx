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
                    <span>Published on {documentContent.date}</span> by {" "}
                    <Link href={`/authors/${documentContent.author}`}>
                        {documentContent.author}
                    </Link> {" "}
                    under the{" "}
                    <Link href={`/categories/${documentContent.category}`}>
                        {documentContent.category}
                    </Link>{" "}
                    category.
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