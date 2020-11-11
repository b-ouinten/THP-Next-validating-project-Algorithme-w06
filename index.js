/* -------------- Subject-1 --------------- */
console.log('--- Subject-1 ---')
let ary = [1, 8, 10, 21];
x = 31;

/* ---------------------------- */
console.log('O(n²) :');

Array.prototype.hasTermesOf = function(x) {
  const length = this.length;
  const that = this;
  
  function resolvedInPass(i) {
    function checkFor(j) {
      if (j === length) return false;
      if (that[j] + that[i] === x) return true;
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
console.log('O(n) :');

Array.prototype.hasTermesOf = function(x) {
  const complementsToX = new Array(x).fill(0);

  for (let i = 0; i < this.length; i++)
    if (this[i] < x) complementsToX[this[i]]++;

  for (let i = 0; i < complementsToX.length / 2; i++) 
    if (complementsToX[i] > 0 && complementsToX[x - i] > 0) return true;

  return false; 
}

console.log(ary, x, ary.hasTermesOf(x));
console.log('--------------------------');

/* -------------------------------- */
console.log('One pass :');

Array.prototype.hasTermesOf = function(x) {
  
}

console.log(ary, x, ary.hasTermesOf(x));

/* -------------- Subject-2 --------------- */
console.log('--- Subject-2 ---')
ary = [3, 7, 8, 3, 6, 1];

/* -------------------------------- */
console.log('O(n²) :');

Array.prototype.hasWestView = function() {
  const length = this.length;
  const that = this;
  let count = 0;

  function isLowerAtLeast(i) {
    function checkFor(j) {
      if (j === length) return false;
      if (that[j] > that[i]) return true;
      return checkFor(j + 1);
    }
    
    return checkFor(i + 1);
  }

  for (let i = 0; i < length; i++)
    if (!isLowerAtLeast(i)) count++;
    
  return count;
}

console.log(ary, ary.hasWestView());
console.log('--------------------------');

/* -------------------------------- */
console.log('O(n) :');

Array.prototype.hasWestView = function() {
}

console.log(ary, ary.hasWestView());
console.log('--------------------------');

/* -------------------------------- */
console.log('One pass :');

Array.prototype.hasWestView = function() {
}

console.log(ary, ary.hasWestView());
console.log('--------------------------');
