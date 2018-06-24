var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (arr) {
      return arr[0];
  },

  // returns the last element of an array
  last: function (arr) {
    return arr[arr.length-1];
  },

  // returns the index of the first matching element from left to right
  indexOf: function (arr, value) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (arr, value) {
    for (var i = arr.length-1; i >= 0; i--) {
      if (arr[i] === value) {
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (arr) {
    var newArr = [];
    for (var i = 0; i < arr.length-1; i++) {
      newArr[i] = arr[i];
      // newArr.push(arr[i]);   // array method
    }
    return newArr;
    // return arr.slice(0, -1);   // array method
  },
  
  // returns an array with all falsey values removed
  compact: function(arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) {         // checks for true values
        console.log(arr[i]); 
        newArr[newArr.length] = arr[i];       // newArr empty, arr[0] goes into newArr[0], newArr.length becomes 1, arr[1] goes into newArr[1], newArr.length becomes 2...  
        console.log(newArr);
      }
    }
    return newArr;
    // with array methods
    // for (var i = arr.length - 1; i >= 0; i--) {
    //   // if (isNaN(arr[i]) || arr[i] === 0 || arr[i] === false || arr[i] === "" || arr[i] === undefined || arr[i] === null) {
    //   // Which is same as
    //   if (!arr[i]) {
    //       arr.splice(i, 1);
    //   }
    // }
    // console.log(arr); 
    // return arr;
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (arr, start, end) {
    var newArr = [];
    for (var i = start; i < end; i++) {
      newArr[newArr.length] = arr[i];
      // newArr.push(arr[i]);   // array method
    }
    return newArr;
    // return arr.slice(start, end);    // array method
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(arr, n){
    if (n === undefined) {
      var newArr = [];
      for (var i = 1; i < arr.length; i++) {
        newArr[newArr.length] = arr[i];
        // newArr.push(arr[i]);   // array method
      }
      return newArr;
    }
    else if (n === 0) {
      return arr;
    }
    else {
      var newArr = [];
      for (var i = n; i < arr.length; i++) {
        newArr[newArr.length] = arr[i];
        // newArr.push(arr[i]);     // array method
      }
      return newArr;
    }
    // with array methods
    // if (n === undefined) {
    //   return arr.slice(1);
    // }
    // else if (n === 0) {
    //   return arr.slice(0);
    // }
    // else {
    //   return arr.slice(n);
    // }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(arr, n) {
    if (n === undefined) {
      var newArr = [];
      for (var i = 0; i < arr.length-1; i++) {
        newArr[i] = arr[i];
      }
      return newArr;
    }
    else if (n === 0) {
      return arr;
    }
    else {
      var newArr = [];
      for (var i = 0; i < arr.length-n; i++) {
        newArr[i] = arr[i];
      }
      return newArr;
    }
    // with array methods
    // if (n === undefined) {
    //   return arr.slice(0, -1);
    // }
    // else if (n === 0) {
    //   return arr.slice(0);
    // }
    // else {
    //   return arr.slice(0, -n);
    // }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (arr, n) {
    if (n === undefined) {
      return [arr[0]];  
      // return arr.slice(0, 1);    // array method
    }
    else if (n > arr.length) {
      return arr;
      // return arr.slice(0);   // array method
    }
    else if (n === 0) {
      return [];
    }
    else {
      var newArr = [];
      for (var i = 0; i < n; i++) {
        newArr[i] = arr[i];
      }
      return newArr;
      // return arr.slice(0, n);    // array method
    }
    // with array methods
    // if (n === undefined) {
    //   return arr.slice(0, 1);
    // }
    // else if (n > arr.length) {
    //   return arr.slice(0);
    // }
    // else if (n === 0) {
    //   return [];
    // }
    // else {
    //   return arr.slice(0, n);
    // }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (arr, n) {
    if (n === undefined) {
      return [arr[arr.length-1]];
      // return arr.slice(-1);    // array method
    }
    else if (n > arr.length) {
      return arr;
      // return arr.slice(0);   // array method
    }
    else if (n === 0) {
      return [];
    }
    else {
      var newArr = [];
      for (var i = arr.length-n; i < arr.length; i++) {
        newArr[newArr.length] = arr[i];
      }
      return newArr;      
      // return arr.slice(-n);    // array method
    }
    // with array methods
    // if (n === undefined) {
    //   return arr.slice(-1);
    // }
    // else if (n > arr.length) {
    //   return arr.slice(0);
    // }
    // else if (n === 0) {
    //   return [];
    // }
    // else {
    //   return arr.slice(-n);
    // }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(arr, value, start, end) {
    if (start === undefined && end === undefined) {
      start = 0;
      end = arr.length;
      var newArr = [];
      for(var i = 0; i < end; i++){
        newArr[i] = value;
        // arr.splice(i, 1, value);   // array method
      }
      return newArr;
    }
    else {
      var newArr = [];
      for (var i = 0; i < arr.length; i++) {
        if (i < start || i >= end) {
          newArr[newArr.length] = arr[i];
        }
        else {
          newArr[newArr.length] = value;
        }
      }
      return newArr;
      // arr.splice(i, 1, value);   // array method
    }
    // with array methods
    // if (start === undefined && end === undefined) {
    //   start = 0;
    //   end = arr.length;
    //   for(var i=0; i<end; i++){
    //     arr.splice(i, 1, value);
    //   }
    // }
    // else {
    //   for(var i=start; i<end; i++) {
    //     arr.splice(i, 1, value);
    //   }
    // }
    // return arr;
  },

  // removes all given values from an array
  pull: function (arr, value1, value2) {
    console.log(' all ', arr, value1, value2)
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    console.log(' arr[i] ', arr[i]);
    if (arr[i] === value1 || arr[i] === value2) {
      delete arr[i];
      console.log(arr[i]);
    }
    else {
      newArr[newArr.length] = arr[i];
      console.log(' new arr[i] ', arr[i]);
      console.log(' new ', newArr);
    }
  }
  return newArr;
    // with array methods
    // var index = arr.indexOf(value);
    // for (var i = 0; i < arr.length; i++) {
    //   arr.splice(index, 1);
    // }
    // return arr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (arr, index) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < index.length; j++) {
        if (i === index[j]) {
          newArr[newArr.length] = arr[i];
        }
      }
    }
    return newArr;
    // with array methods
    // var removedItems = [];
    // for (var i = index.length-1; i >= 0; i--) {
    //   removedItems.push(arr.splice(index[i], 1));
    // }
    // var fix = removedItems.sort().toString().split(',').map(Number);
    // return fix;
  },

  // creates an array excluding all the specified values
  without: function(arr, a, b) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === a || arr[i] === b) {
        delete arr[i];
      }
      else {
        newArr[newArr.length] = arr[i];
      }
    }
    return newArr;
    // with array methods
    // var newArr = [];
    // for (var i = 0; i < arr.length; i++) {
    //   if(arr[i] !== a && arr[i] !== b) {
    //     newArr.push(arr[i]);
    //   }
    // }
    //   console.log(newArr);
    //   return newArr;
  },
      

  // returns an array with specified values excluded
  difference: function(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        newArr[newArr.length] = arr1[i];
      } 
    } 
    return newArr;
    // with array methods
    // for (var j = 0; j < value.length; j++) {
    //   for (var i = 0; i < arr.length; i++) {
    //     if(arr[i]===value[j]){
    //       arr.splice(i,1);
    //     }
    //     console.log(arr[i]);
    //     console.log(value[j]);
    //   }
    // }
    // console.log(arr);
    // return arr;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (arr1, arr2) {
    var combined = [];
    for (var i = 0; i < arr1.length; i++) {
      combined[combined.length] = [arr1[i], arr2[i]];
    }
    return combined;
    // with array methods
    // var combined = [];
    // for (var i = 0; i < arr1.length; i++) {
    //   combined.push([arr1[i], arr2[i]]);
    // }
    // return combined;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (arr) {
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        arr1[arr1.length] = arr[i][j];
        arr2[arr2.length] = arr[i][j + 1];
        break;
      }
    }
    return [arr1, arr2];
    // with array methods
    // var arr1 = [];
    // var arr2 = [];
    // for (var i = 0; i < arr.length; i++) {
    //   for (var j = 0; j < arr.length; j++) {
    //     arr1.push(arr[i][j]);
    //     arr2.push(arr[i][j + 1]);
    //     break;
    //   }
    // }
    // return [arr1, arr2];
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(arr, chunkSize){
    if (arr.length === 0) {
      return [];
    }
    else if (chunkSize === 0) {
      return [];
    }
    else if (chunkSize > arr.length) {
      return [arr];
    }
    else if (chunkSize === arr.length) {
      return [arr];
    }
    else {
      // var newChunk = [];
      // for (var i = 0; i < chunkSize; i++) {
      //   newChunk[newChunk.length] = arr[i];
      // }
      // var endChunk = [];
      // for (var i = chunkSize; i < arr.length; i++) {
      //   endChunk[endChunk.length] = arr[i];
      // }
      var newArr = [];
      if (arr.length % 2 === 0) {  
        for (var i = 0; i < arr.length; i += chunkSize) {
          newArr[newArr.length] = [arr[i], arr[i + chunkSize-1]];
        }
      }
      else {
        for (var i = 0; i < arr.length-1; i += chunkSize) {
          newArr[newArr.length] = [arr[i], arr[i + chunkSize-1]];
        }
          newArr[newArr.length] = [arr[arr.length-1]];
      }
      return newArr;
    }
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, iteratee) {
    for (var key in collection) {
      iteratee(collection[key])
    }
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
