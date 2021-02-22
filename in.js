// var sum = 0;
// for(var i =0; i<1000; i++){
//     if(i%3 == 0){
//         sum +=i;
//     }
// }

// console.log(sum)
// function map(array, func){
//     var result = [];
//     for(var i=0; i<array.length; i++){
//         result.push(func(array[i]))
//     }
//     return result;
// }

// function questionable(func){
//     return function (array){
//         return map(array, func)
//     }
// }

// let g = function(x){return x*x}
// console.log(questionable(g,[1,2,3]));

// let a = function(x){return x*x}
// console.log(questionable([1,2,3], a));

// let b = function(x){return x*x}
// let c = questionable(b)
// console.log("tes c", c([1,2,3]));

// let d = function(x){return x*x}
// let e = questionable([1,2,3])
// console.log(d(e))

// code 4
// let i = function(x){return x*x}
// let z = questionable([1,2,3])
// console.log(z(i))




// function catcher(x){
//     try {
//         console.log('A')
//         call(x)
//         console.log('B')
//     } catch (error) {
//         console.log('C')
//     } finally{
//         console.log('D')
//     }
// }
// let x = catcher('D')
// console.log(x)
// var a = 1, x = 2
// var i = a.x;
// console.log('peratama', i)
// // var ii = a['x'];
// // console.log('kedua', ii)
// // var iii = a[x];
// console.log('kedua', iii)

// 5
//  Person  = {
//     name: adi,
//     age: 20
// }
// console.log(Person.name, Person.age)

// 6
// var x = 100;
// function blah1(){
//     x = 5;
//     console.log(x)
// }
// function blah2(){
//     x = 6;
//     console.log(x)
// }

// blah1();
// blah2()
// console.log(x)

// no 7

// var arr = []
// for(var i=0; i<10; i++){
//     var f = function(){
//         console.log(i)
//     }
//     arr.push(f)
// }
// for(var j=1; j<arr.length; j++){
//     arr[j]();
// }

// var arr = []
// for(var i=0; i<10; i++){
//     var f= function(i){
//         return function(){
//             console.log(i)
//         }
//     }(i)
//     arr.push(f)
// }
// for(var j = 1; j<arr.length; j++){
//     if(arr[j] !== arr[j-1]){
//         arr[j]()
//     }
// }

// Person = function(name){
//     this.name = name;
// }
// Person.prototype.age = 18;
// alvin = new Person("Alvin");
// console.log(alvin.name, alvin.age)

// Person.prototype.age = 20;
// berto = new Person("Berto");
// console.log(alvin.name, alvin.age)
// console.log(berto.name, berto.age)

// Person = function(name){
//     this.name = name;
// }
// Person.prototype.age = 18;
// alvin = new Person("Alvin");

// berto = new Person("Berto");
// berto.age = 20;

// if(alvin.hasOwnProperty('name')){
//     console.log('First true')
// }
// if(berto.hasOwnProperty('name')){
//     console.log('second true')
// }
// if(alvin.hasOwnProperty('age')){
//     console.log('tri true')
// }
// if(berto.hasOwnProperty('age')){
//     console.log('four true')
// }

// console.log(1)

// setTimeout(function(){
//     console.log(2)
// }, 1000)
// setTimeout(function(){
//     console.log(3)
// }, 2000)
// setTimeout(function(){
//     console.log(4)
// }, 0)
// console.log(5)

// var start = new Date()
// while(true){
//     var now = new Date()
//     if(now - start > 500){
//         break;
//     }    
// }
// console.log(6)

// const oddNumber = (num) => {
//     if(num % 2 !== 0) {
//         return true;
//     } else {
//         return false;
//     } 
// }
// let x = oddNumber(22)
// console.log(x)

// const isPolindrome = word=> word.toLowerCase().split('').reverse().join('')

// let x = isPolindrome('racecar');
// console.log(x)

// const arr = [112, 24, 31, 44, 101, 203, 33, 56];
// const findMaxMin = (arr) => {
//    let max = arr[0];
//    let min = arr[0];
//    for(let i = 0; i < arr.length; i++) {
//       if(arr[i] > max) {
//          max = arr[i];
//       }
//       else if (arr[i] < min) {
//          min = arr[i];
//       }
//    };
//    return {
//       min, max
//    };
// };
// console.log(findMaxMin(arr));

// const array = [23, 43, 76, 12, 9, 56, 7];

// const findNumber = (array) => {
//     let min = array[0];
//     let max = array[0];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] > max){
//             max = array[i]
//         } else if(array[i] < min){
//             min = array[i]
//         }
//     }
//     return {
//         min, max
//     }
// }

// console.log(findNumber(array))

// sort alogaritma

// buble sort
/**
 * 
 * @param {bandingkan item pertama dengan itam kedua jika item pertama lebih besar akan digeser ke posisi dua sehingga yg lebih besar ada diposisi dua, kemudian bandingak item ke dua dengan item ke tiga jika item kedua lebih besar akan bergeser ke posisi tiga. terus seperti itu sampai item dari array terakhir.
} arr 
 */
const bubbleSort = (arr) => {
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }
console.log(bubbleSort([7,5,2,4,3,9])); //[2, 3, 4, 5, 7, 9]
console.log(bubbleSort([9,7,5,4,3,1])); //[1, 3, 4, 5, 7, 9]


// selections short
/**
 *
 *temukan index pertama dari array, kemudian looping sisa array tidak termasuk index pertama dan temukan index terendah dan kemudian geser ke elemen kedua begitu terus menerus sampai ke index terakhit dari array tersebut. 
 */

const selectionSort = (arr) => {
    var minIdx, temp, 
        len = arr.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
         if(arr[j]<arr[minIdx]){
            minIdx = j;
         }
      }
      temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
    }
    return arr;
  }

console.log(selectionSort([33,81,4,84,57,6])); //[1, 2, 3, 4, 5, 6]

// insertion sort
/**
 * 
 * @param {dimulai dengan elemen kedua. Pilih elemen kedua untuk disisipkan lalu bandingkan dengan elemen sebelumnya. Jika yang pertama lebih besar, pindahkan yang pertama ke posisi kedua dan yang kedua pada awalnya. Sekarang item pertama dan kedua diurutkan. Kemudian, pilih elemen ketiga dan periksa apakah elemen kedua lebih besar dari yang ketiga. terus berjalan dengan cara yang sama sampai Anda mencapai elemen pertama atau elemen yang lebih kecil dari elemen yang Anda bandingkan. Saat Anda mendapatkan item yang lebih kecil dari item yang dipilih, Anda memasukkannya.} arr 
 */


const insertionSort = (arr) => {
    var i, len = arr.length, el, j;
  
    for(i = 1; i<len; i++){
      el = arr[i];
      j = i;
  
      while(j>0 && arr[j-1]>toInsert){
        arr[j] = arr[j-1];
        j--;
     }
  
     arr[j] = el;
    }
  
    return arr;
  }
console.log(selectionSort([33,81,4,84,57,6])); //[ 4, 6, 33, 57, 81, 84 ]

// merge sort
/**
 * 
 * @param {Code Merge Sort: Merge sort memiliki dua bagian. Bagian utama membagi atau memecah dan bagian kedua adalah bagian penggabungan / penggabungan. Pada saat penggabungan, bagian-bagian digabungkan.

* @param {Divide: fungsi pertama bernama mergeSort sebenarnya adalah fungsi pembagian. dimana sebuah array dibagi menjadi dua}.

* @param {merge: ini hanya menggabungkan dua array yang diurutkan. Berhati-hatilah, kedua larik ini bisa berukuran berbeda} 
 */

const mergeSort= (arr) => {
    var len = arr.length;
    if(len <2)
       return arr;
    var mid = Math.floor(len/2),
        left = arr.slice(0,mid),
        right =arr.slice(mid);
    //send left and right to the mergeSort to broke it down into pieces
    //then merge those
    return merge(mergeSort(left),mergeSort(right));
 }
 const merge = (left, right) => {
    var result = [],
        lLen = left.length,
        rLen = right.length,
        l = 0,
        r = 0;
    while(l < lLen && r < rLen){
       if(left[l] < right[r]){
         result.push(left[l++]);
       }
       else{
         result.push(right[r++]);
      }
    }  
    //remaining part needs to be addred to the result
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

console.log(selectionSort([33,81,4,84,57,6])); //[ 4, 6, 33, 57, 81, 84 ]
  
const findMissing = num => {
    const max = Math.max(...num); // Will find highest number
    const min = Math.min(...num); // Will find lowest number
    const missing = []
  
    for(let i=min; i<= max; i++) {
      if(!num.includes(i)) { // Checking whether i(current value) present in num(argument)
        missing.push(i); // Adding numbers which are not in num(argument) array
      }
    }
    return missing;
  }
console.log(findMissing([1,3, 5]))  // [2, 4]
