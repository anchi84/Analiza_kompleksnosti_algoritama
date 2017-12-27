function suma1(n) {
    var sum = 0;
    for(var i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

$('#suma1').click(function() {	
	$('#rez1').html("Za n=10 suma je: " +suma1(10));
});

function suma2(n) {
    return n*(n+1)/2;
}

$('#suma2').click(function() {	
	$('#rez2').html("Za n=10 suma je: " +suma2(10));
});

function bruteForceSort(array) {
	var length = array.length;
    for (var i = 0; i < length -1; i++) {
       	for (var j = i + 1; j < length; j++) {
            if(array[i] > array[j]){
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        console.log(array);
        }
    }
    return array;
}

$('#sort1').click(function() {	
	$('#rez3').html("Za niz [10, 2, 1, 3, 7, 4] sortiran je: " +bruteForceSort([10, 2, 1, 3, 7, 4]));
});

function bubbleSort(array){
    var length = array.length;
      	for (var i = length-1; i >= 0; i--){
          for(var j = 1; j <= i; j++){
            if(array[j-1] > array[j]){
              var temp = array[j-1];
              array[j-1] = array[j];
              array[j] = temp;
            }
          console.log(array);
          }
        }
        return array;
}

$('#sort2').click(function() {	
	$('#rez4').html("Za niz [10, 2, 1, 3, 7, 4] sortiran je: " +bubbleSort([10, 2, 1, 3, 7, 4]));
});

function Fibonacci(number) {
    if (number <= 1) {
        return number;
    }
    return Fibonacci(number-2) + Fibonacci(number-1);
}

$('#Fibonacci').click(function() {	
	$('#rez5').html("10-ti član Fibonačijevog niza je: " +Fibonacci(10));
});