const array = [4, 5, 3, 5, 2, 4, 5, 3];
const avg = array.reduce(function(acc,item,index, arr) {
    sum = acc + item;
    if(index == arr.length){
        return sum / arr.length
    }
    return sum;
})
console.log(avg);