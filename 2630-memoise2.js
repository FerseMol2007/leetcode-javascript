/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const primitiveMap = new Map();
    const objectMap = new WeakMap();
    let idCounter = 0;

    function getId(arg) {
        const isObject = arg !== null && (typeof arg === 'object' || typeof arg === 'function');
        const currentMap = isObject ? objectMap : primitiveMap;

        if(!currentMap.has(arg)) {
            currentMap.set(arg, ++idCounter);
        }
        return currentMap.get(arg);
    }
    const cache = new Map();
    return function(...args){
        const key = args.map(getId).join(',');

        if (cache.has(key)) {
            return cache.get(key); 
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };

}
/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */