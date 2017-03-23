// Reduce an array of pairs [condition, value] to return an array of values
// where the condition was truthy. If no value is provided, the condition itself
// is treated as the value, and is added to the result array if truthy.
export function filterPairs(arr) {
  return arr.reduce((result, pair) => pair[0] ? result.concat(pair[pair.length === 1 ? 0 : 1]) : result, []);
}
