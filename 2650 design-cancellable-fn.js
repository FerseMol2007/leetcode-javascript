/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
   let cancel;
   const promise = new Promise(async(resolve, reject) => {
    let isCancelled = false;
    cancel = () => {
        isCancelled = true;
        try{
            const res = generator.throw("Cancelled");
            resolve(res.value);
        } catch(err){
            reject(err);
        }
    };
    try{
        let next = generator.next();
        while(!next.done) {
            try{
                const value = await next.value;
                if(isCancelled) return;
                next = generator.next(value);
            } catch(err){
                if(isCancelled) return;
                next = generator.throw(err);
            }
        }
        resolve(next.value);
    } catch(err){
        reject (err);
    }
   });
   return [cancel, promise]; 
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */