var arr = [];
var x = prompt('SHEIYVANE CIFRI');
for (var f = 0; f < x; f++) {
    var y = prompt('sheiyvane studentebis gvarebi');
    arr.push(y);
}


var array = [];
var z = prompt('SHEIYVANE CIFRI');
for (var w = 0; w < z; w++) {
    var h = prompt('sheiyvane studentebis gvarebi');
    array.push(h);
}

for (var i = 0; i<array.length; i++) {
    var arrlen = arr.length;
    for (var j = 0; j<arrlen; j++) {
        if (array[i] == arr[j]) {
            arr = array.slice(0, j).concat(arr.slice(j+1, arrlen));
        }
    }
}
alert(arr);






/* var arr = [];
var x = prompt('SHEIYVANE CIFRI');
for (var f = 0; f < x; f++) {
    var y = prompt('sheiyvane studentebis gvarebi');
    arr.push(y);
}


var array = [];
var z = prompt('SHEIYVANE CIFRI');
for (var w = 0; w < z; w++) {
    var h = prompt('sheiyvane studentebis gvarebi');
    array.push(h);
}


var doNotMatch = []; 

for(var i=0;i<arr.length;i++){
   if(array.indexOf(arr[i])==-1){doNotMatch.push(arr[i]);}
  
}
alert (arr+(array-doNotMatch));
*/