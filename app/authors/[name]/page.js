export default function AuthorPage({ params: { name } }) {
    return (
        <div>
            {decodeURIComponent(name)}
        </div>
    );
}