export default function groupBy(array, keyFunction) {
    return array.reduce((result, item) => {
        const key = keyFunction(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
}