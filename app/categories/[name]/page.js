import ContentDisplay from "@/components/ContentDisplay";
import { getDocuments } from "@/lib/doc";
import { docFilterByCategory } from "@/lib/docFilter";

export default function CategoriesPage({ params: { name } }) {
    const docs = getDocuments();
    const matchedDocs = docFilterByCategory(docs, name);

    return (
        <div>
            <ContentDisplay docId={matchedDocs[0].id} />
        </div>
    );
}