import { getDocumentContent } from "@/lib/doc";


const ContentDisplay = async ({ docId }) => {
    const documentContent =await getDocumentContent(docId);
    console.log(documentContent)
    return (
        <div>

        </div>
    );
};

export default ContentDisplay;