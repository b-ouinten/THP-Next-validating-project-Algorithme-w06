console.log('--------------------------')
ary = [1, 8, 10, 21];
x = 3;

/* ----------------------------- */
console.log('Subject-1 : O(n²)');

Array.prototype.hasTermesOf = function(x) {
  const length = this.length;
    for (let i = 0; i < length; i++) 
      for (let j = i + 1; j < length; j++)
        if (this[i] + this[j] === x) return true;
  
  return false;
}

console.log(ary, x, ary.hasTermesOf(x));
console.log('--------------------------')

/* ---------------------------- */
console.log('Subject-1 : O(n²)');

Array.prototype.hasTermesOf = function(x) {
  const length = this.length;
  const that = this;
  
  function resolvedInPass(i) {
    function checkFor(j) {
      if (j === length) return false;
      if (that[i] + that[j] === x) return true;
      return checkFor(j + 1);
    }
    
    return checkFor(i + 1);
  }
  
  for (let i = 0; i < length; i++)
    if (resolvedInPass(i)) return true;
    // if (this.some((item) => item + this[i] === x)) return true;
  
  return false;
}

console.log(ary, x, ary.hasTermesOf(x));
console.log('--------------------------');

/* -------------------------------- */
console.log('Subject-1 : O(n)');

Array.prototype.hasTermesOf = function(x) {
  
}

console.log(ary, x, ary.hasTermesOf(x));
console.log('--------------------------');
