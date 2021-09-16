

function writeCards(array, name){
  let newArr=[];
  for(let i = 0 ; i< array.length ; i++){
   let  message= `Thank you, ${array[i]}, for the wonderful ${name} gift!`;
   newArr.push(message);
}
return newArr; 
}

function countDown(n){
while(n>-1){
    console.log(n);
    n--;
}
}