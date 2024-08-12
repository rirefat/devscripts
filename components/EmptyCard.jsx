
const EmptyCard = () => {
    return (
        <div
            className="absolute left-0 top-12 z-[999] w-full rounded-md bg-white p-4 shadow"
        >
            <p className="text-sm font-light">
                No results found !!
            </p>
        </div>
    );
};

export default EmptyCard;