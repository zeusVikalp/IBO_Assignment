var arr = [1,2,3,4,1,2,3,4]

var count = {}
for(var i =0;i<arr.length;i++){
    if(count[arr[i]]!==undefined){
        count[arr[i]]++
    }
    else{
        count[arr[i]] = 1
    }
}
console.log(count)