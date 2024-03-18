//anonymous function
//1.Print odd numbers in an array
var res=function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2==1)
        {
            console.log(arr[i]);
        }
    }
}
console.log(res([2,3,4,5,6]));


//2.Convert all the strings to title caps in a string array

var res=function(str) {
	str = str.toLowerCase().split(' ');
	for (let i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
}
console.log(res("harish guvi"));


//3.sum of all numbers in an array
var sum=0;
var res=function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        sum=sum+arr[i];
    }
return sum;   
}
console.log(res([2,3,4,5,6]))

//4.Return all the prime numbers in an array
var res=function(arr){
    arr = arr.filter((ele) => {
      for (var i = 2; i <= Math.sqrt(ele); i++) {
        if (ele % i === 0)
         return false;
      }
      return true;
    });
    console.log(arr);
}
console.log(res([2,3,4,5]));


//5.Return all the palindromes in an array
function isPalindrome(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanStr === cleanStr.split('').reverse().join('');
}

var res=function(arr) {
    return arr.filter(ele => isPalindrome(ele));
}
console.log(res(["madam", "121", "hello", "world", "12321", "amma"]))

//6.Return median of two sorted arrays of the same size.
var res=function(arr1, arr2) {
    const mergedArr = [...arr1, ...arr2].sort((a, b) => a - b);
    const length = mergedArr.length;
    const mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (mergedArr[mid - 1] + mergedArr[mid]) / 2;
    } else {
        return mergedArr[mid];
    }
}
console.log(res([1,3],[2,4,5]));

//Remove duplicates from an array
var res=function(arr) {
	return [...new Set(arr)];
}

console.log(res(["harish", "manoj", "hsrish","guvi", "manoj", "manoj"]));

//Rotate an array by k times
var rotateArray = function(arr, k) {
    var n = arr.length;
    k = k % n;
const reverse = function(start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    };

    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
return arr;
};
var arr = [1, 2, 3, 4, 5];
var k = 2;
console.log(rotateArray(arr, k));



//ARROW FUNCTIONS
// 1.Print odd numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var printOddNumbers = arr => {arr.forEach(num => {
        if (num % 2 !== 0)
         {
            console.log(num);
        }
    });
};
printOddNumbers(arr);

//2. Convert all the strings to title caps in a string array
var stringArray = ["harish guvi", "hello world", "manoj harish"];
var ctc = arr => {
    return arr.map(str => {
        return str.split(' ').map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    });
};
var tcs = ctc(stringArray);
console.log(tcs);

// 3.Sum of all numbers in an array
var array = [1, 2, 3, 4, 5];
var soa = arr => {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum;
};
var sum = soa(array);
console.log(sum);

//4.Return all the prime numbers in an array
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const isPrime = num => {
    if (num <= 1) 
    return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) 
        return false;
    }
    return true;
};
const primeNumbers = arr => arr.filter(num => isPrime(num));
const primes = primeNumbers(arr);
console.log(primes);

//5.Return all the palindromes in an array
var arr = ["harish", "guvi", "madam", "amma", "121"];
var isPalindrome = str => {
    var reversed = str.split("").reverse().join("");
    return str === reversed;
};
var palindromeArray = arr => arr.filter(str => isPalindrome(str));
var palindromes = palindromeArray(arr);
console.log(palindromes)

