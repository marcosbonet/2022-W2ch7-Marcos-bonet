export function myLength(array) {
    let count = 0;
    for (let i = 0; array[i] !== undefined; i++) {
        count += 1;
    }
    return count;
}
export function myPush(arrayTwo, element, ){
    arrayTwo[myLength(arrayTwo)] = element
    
    return myLength(arrayTwo)}

export function myIndexOf(array,element){

    for (let i = 0; i < array.length; i++) {
       if(array[i]===element){
        return i
       }
       return -1;
    }

}





// export function myUnShift(array,element){

//     array[myLength(array)]=array[myLength(array)]+1;
//     array[0]=element;
//     return myLength(array)
// }






// export function myPop(arrayThree){
//     const arrayThreecopy= [];
//     const element='';

//     for(let i= 0;i<arrayThree.length -1; i++){ 

// arrayThreecopy.push(elements)
    
    
// }
// console.log(arrayThreecopy)

     
// }



// let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// function myFunction(item) {
//   sum += item;
// }
    

