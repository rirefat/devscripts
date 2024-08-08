import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {

    const fileNames = fs.readdirSync(postsDirectory);

    const allDocuments = fileNames.map(filename => {
        const id = filename.replace(".md", "");
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return { id, ...matterResult.data }
    });

    return allDocuments.sort((a, b) => {
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;
        else return 0;
    });
}


export async function getDocumentContent(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    const processedContent = await remark().use(html).process(matterResult.content);
    const contentHTML = processedContent.toString();

    return {
        id,
        contentHTML,
        ...matterResult.data
    };
}

// export async function getDocumentContent(id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, "utf8");

//     const matterResult = matter(fileContents);

//     const processedContent = await remark().use(html).process(matterResult.content);

//     const contentHtml = processedContent.toString();

//     return {
//         id,
//         contentHtml,
//         ...matterResult.data,
//     }
// }