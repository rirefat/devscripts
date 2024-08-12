import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { docFilterByTag } from "@/lib/docFilter";

export default function TagsPage({ params: { name } }) {
    const docs = getDocuments();
    const matchedDocs = docFilterByTag(docs, name);
    return (
        <div>
            <ContentDisplay docId={matchedDocs[0].id}/>
        </div>
    );
}