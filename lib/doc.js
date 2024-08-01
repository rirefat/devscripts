import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), "docs");

export function getDocuments() {

    const fileNames = fs.readdirSync(postsDirectory);

    const allDocuments = fileNames.map(filename => {
        const id = filename.replace(".md", "");
        const fullPath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return {
            id, ...matterResult.data
        }
    });

    return allDocuments.sort((a, b) => {
        if (a.order > b.order) return 1;
        if (a.order < b.order) return -1;
        else return 0;
    });
}
