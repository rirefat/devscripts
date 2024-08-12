import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { docFilterByAuthor } from "@/lib/docFilter";

export default function AuthorPage({ params: { name } }) {
    const docs = getDocuments();
    const matchedDocs = docFilterByAuthor(docs, name);

    return (
        <div>
            <ContentDisplay docId={matchedDocs[0].id}/>
        </div>
    );
}