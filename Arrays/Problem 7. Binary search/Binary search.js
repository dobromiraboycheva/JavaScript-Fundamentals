/*Write a script that finds the index of given element in a sorted array of integers by using the binary search algorithm.*/
var numbers=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];

function binarySearch(array,num,min,max){
    if(max<min){
        return -1;
    }
    var mid=min+Math.floor((max-min)/2);
    if(array[mid]>num){
        return binarySearch(array,num,min,mid-1);
    }
    else if(array[mid]<num){
        return binarySearch(array,num,mid+1,max);
    }
    else{
        return mid;
    }
}
console.log('numbers=[4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3];');
console.log('binarySearch(numbers,1,0,numbers.length)');
console.log(binarySearch(numbers,1,0,numbers.length));