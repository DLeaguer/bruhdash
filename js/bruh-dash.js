var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (firstElement) {
      return firstElement[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, num) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, num) {
    for (var i = arr.length-1; i >=0; i--) {
      if (arr[i] === num) {
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    return arr.slice(0,-1);
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    return arr.filter(function(v) {
      return !!v; });
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    return arr.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if (n === undefined) {
      return arr.slice(1);
    }
    else if (n === 0) {
      return arr.slice(0);
    }
    else {
      return arr.slice(n);
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (n === undefined) {
      return arr.slice(0, -1);
    }
    else if (n === 0) {
      return arr.slice(0);
    }
    else {
      return arr.slice(0, -n);
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (n === undefined) {
      return arr.slice(0, 1);
    }
    else if (n > arr.length) {
      return arr.slice(0);
    }
    else if (n === 0) {
      return [];
    }
    else {
      return arr.slice(0, n);
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if (n === undefined) {
      return arr.slice(-1);
    }
    else if (n > arr.length) {
      return arr.slice(0);
    }
    else if (n === 0) {
      return [];
    }
    else {
      return arr.slice(-n);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    return arr.fill(value, start, end);
  },

  // removes all given values from an array
  pull: function (arr, value) {
    var index = arr.indexOf(value);
    
    for(var i = 0; i < arr.length; i++) {
      arr.splice(index, 1);
    }
    
    return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, index) {
    var removedItems = [];
  
    for (var i = index.length-1; i >= 0; i--){
      removedItems.push(arr.splice(index[i], 1));
    }
    
    var a = removedItems.sort().toString().split(',').map(Number);
    
    console.log(a);  
    return a;
  },

  // creates an array excluding all the specified values
  without: function(arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i]===value){
        arr.splice(i,1);
      }
    }
      console.log(arr);
      return arr;
  },
      

  // returns an array with specified values excluded
  difference: function(arr, value) {
    for (var j = 0; j < value.length; j++) {
      for (var i = 0; i < arr.length; i++) {
        if(arr[i]===value[j]){
          arr.splice(i,1);
        }
        console.log(arr[i]);
        console.log(value[j]);
      }
    }
    console.log(arr);
    return arr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    var combined = [];
    for (var i = 0; i < arr1.length; i++) {
      combined.push([arr1[i],arr2[i]]);
    }
    console.log(combined);
    return combined;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        arr1.push(arr[i][j]);
        arr2.push(arr[i][j + 1]);
        break;
      }
    }
    console.log([arr1, arr2]);
    return [arr1, arr2];
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, size){
    var results = [];
    while (arr.length) {
      results.push(arr.splice(0, size));
    }
    return results;
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {
    
  }
};
