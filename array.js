Array.prototype.last = function () {
    return this[this.length - 1 ] !== undefined ? this [this.length -1] : -1;
};
 /**
  * usage:
  * const arr[1, 2, 3];
  * console.log(arr.last()); // 3 
  * 
  * const emtyArr = [];
  * console.log(emptyArr.last()); // -1
  */
 
 0 <= Arr.length <= 1000
 0 <= Arr[i] <= 1000