Array.prototype.uniq = function () {
  const arr = [];
  const logsStuff = ((el) => {
    if(!arr.includes(el)) {
      arr.push(el);
    }
  });
  this.forEach(logsStuff);
  return arr;
};

Array.prototype.twoSum = function () {
  const arr = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if(this[i] + this[j] === 0) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
};

Array.prototype.transpose = function () {
  const other = new Array(this[0].length);
  for(let i = 0; i < other.length; i++)
    other[i] = new Array(this.length);

  for(let i = 0; i < this.length; i++)
    for(let j = 0; j < this[i].length; j++)
      other[j][i] = this[i][j];

  return other;
};

Array.prototype.myEach = function (fun) {
  for(let i = 0; i < this.length; i++) {
    let curr = this[i];
    fun(curr);
  }
};

Array.prototype.myMap = function (fun) {
  let arr = [];

  this.myEach(function(el) {
    arr.push(fun(el));
  });

  return arr;
};

Array.prototype.myInject = function (fun) {
  let acc = this[0];
  let count = 0;
  this.myEach(function(el) {
    if(count !== 0)
      acc = fun(acc, el);
    count ++;
  });
  return acc;
};

Array.prototype.bubbleSort = function() {
  let sorted = false;
  while(sorted === false) {
    sorted = true;
    for(let i = 0; i < this.length - 1; i++) {
      let j = i + 1;
      if(this[i] > this[j]) {
        sorted = false;
        let temp = this[i];
        this[i] = this[j];
        this[j] = temp;
      }
    }
  }
};

function substring(string) {
  const arr = [];
  for(let i = 0; i < string.length; i++) {
    arr.push(string.substring(i,string.length));
  }
  return arr;
}

function recursionPow(b, n) {
  if(n === 0)
    return 1;
  return b * recursionPow(b, n-1);
}

function fibonacciR(n) {
  if(n === 1)
    return [0, 1];
  else if(n === 0)
    return [0];
  let prev = fibonacciR(n - 1);
  prev.push(prev[prev.length - 1] + prev[prev.length - 2]);
  return prev;
}

function bSearch(arr, toSearch) {
  if(arr.length === 0)
    return null;
  const midI = Math.floor(arr.length / 2);
  if(arr[midI] === toSearch)
    return midI;

  if(toSearch < arr[midI]){
    const leftArr = arr.slice(0, midI);
    return bSearch(leftArr, toSearch);
  }
  else {
    const rightArr = arr.slice(midI + 1, arr.length);
    var rightI = bSearch(rightArr, toSearch);
    return rightI !== null ? midI + rightI + 1 : rightI;
  }
}
//
// function subSets(arr){
//   if(arr.length === 0)
//     return [];
//
//   let last = [arr[-1]];
//   let new_array = arr.slice(0, arr.length -1);
//   let sub_array = subSets(new_array);
//
//   subarr + subarr.map do |x|
//
//   return (last.concat(sub_array) + new_array);
// }
