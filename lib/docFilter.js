// Filtering documents based on category
export const docFilterByCategory = (docs, category) => {
    return docs.filter(doc => doc.category === category);
};

// Filtering documents based on tags
export const docFilterByTag = (docs, tag) => {
    return docs.filter(doc => doc.tags.some(inputTag => inputTag === tag));
};

// Filtering documents based on author
export const docFilterByAuthor = (docs, author) => {
    return docs.filter(doc => encodeURI(doc.author) === author);
};