Array.prototype.mapBy = function (...properties) {
    return this.map(item => {
        if (!properties.length) {
            return item;
        }
        return arguments.length > 1
            ? properties.reduce((result, property) => Object.assign(result, {[property]: item[property]}), {})
            : item[properties[0]];
    })
};

Array.prototype.groupBy = function (keyExtractor, valueMapper) {
    return this.reduce((result, item) => {
        let key = keyExtractor(item);
        let value = valueMapper ? valueMapper(item) : item;
        key in result
            ? result[key].push(value)
            : result[key] = [value];
        return result
    }, {});
};