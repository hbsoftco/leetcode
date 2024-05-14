/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        let result = x;
        // Iterate over functions from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result);
        }
        return result;
    }
};

// Example usage
const fn = compose([x => x + 1, x => 2 * x]);
console.log(fn(4)); // Output: 9
