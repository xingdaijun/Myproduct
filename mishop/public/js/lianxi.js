function sum(arr){
  for(var a=0;a<arr.length;a++){
    for(var b=0;b<arr.length;b++){
      if((arr[a]+arr[b])===19){
        console.log(arr[a],arr[b])
      }
    }
  }
}
sum([1,2,4,6,9,10,12,15,17]);
//var f=function(){var a=b=c=d=1}
//f()
// console.log(c)
// console.log(b)
// //console.log(a)
// console.log(d)
//  var f=function(){var a=b=c=1}
//  setTimeout(f,0)
//  console.log(b)
//  f()
var str="ryan is not a good man";
var arr=str.split(" ");
var b=4;
for(var a=0;a<arr.length;a++){
  b++;
  arr[a]+=b;
}
var str=arr.join(" ");
console.log(str)