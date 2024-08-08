import ContentDisplay from "@/components/ContentDisplay";

export default function Document({ params: { documentId } }) {

    return <ContentDisplay docId={documentId}/> ;
}