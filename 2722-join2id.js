/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
   const resultObj = {};
   for(const obj of arr1){
    resultObj[obj.id] = {...obj}
   } 
   for(const obj of arr2){
    if (resultObj [obj.id]) {
        resultObj [obj.id] = {...resultObj[obj.id], ...obj};
    }else{
    resultObj[obj.id] = {...obj};
    } 
   }

   return Object.values(resultObj).sort((a,b) => a.id - b.id);

};