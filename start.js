// var n=5

// if(n%2 ==0){
//     console.log('even number');
// }else{
//     console.log('odd number');
// }

// var date = new Date()

// var today = date.getDay()

// switch(today){
//     case 0:
//         console.log('Today is sunday')
//         break
//     case 1:
//         console.log('today is monday')
//         break
//     case 2:
//         console.log('today is tuesday')
//         break
//     case 3:
//         console.log('today is wednesday')
//         break
//     case 4:
//         console.log('today is thursday')
//         break
//     case 5:
//         console.log('today is friday')
//         break
//     case 6:
//         console.log('today is Saturday')
//         break
//     default: console.log('not a valid date');
// }

// var sum = 0;
// for (var i =0; i< 10 ; i++)
// {
  
//    if(!(i%2) == 0){
//       sum += i;
//    }
    
// }
// console.log(sum); 



// for(var i=1; i<=5; i++){
//     var result="";
//     for (var j=5; j>=i; j--){
//         result += '*'
//     }
//     console.log(result);
// }

// var str = "adnan"

// var length = 0

// while(true){
//     if(str.charAt(length) == ''){
//         break
//     }else{
//         length++
//     }
// }

// console.log(length);

// console.log(str.charAt(0));

// var addition  = function(a,b){
//     return a+b
// }

// addition(10,8)

// var a = addition
// console.log(a(8,9));

// call back functions ..................

// function sample(a,b, cb){
//      var c = a + b
//      var d = a - b

//      var result = cb(c,d)
//      return result
// }

// function sum(a,b){
//     return a+b
// }

// var result = sample(5,8, sum)
// console.log(result);

// var result2 =  sample(5,8 , function(c,d){
//       return c - d
// });

// console.log(result2);

// var result3 =  sample(5,8 , function(c,d){
//     return c * d
// });

// console.log(result3);

// higher order function ..................

// function add(a,b){
//     return a+b;
// }

// function manipulate (a,b ,func){
//      var c = a+b
//      var d = a-b

//     return function multiply (){
//         var m = func(a,b)
//         return c*d*m

//     }

// }
// var multiply = manipulate(3,4, add)

// console.log(multiply());

