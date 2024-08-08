import ContentDisplay from "@/components/ContentDisplay";

export default function SubDocument({ params: { subDocumentId } }) {
    return <ContentDisplay docId={subDocumentId}/> ;
}