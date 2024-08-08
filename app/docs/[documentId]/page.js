export default function Content({ params: { documentId } }) {
    console.log(documentId)
    return (
        <div>{documentId}</div>
    );
}